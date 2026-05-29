"use client";

import { useEffect, useState } from "react";
import { Loader2, Star, Check, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTrip } from "@/lib/store/trip";
import { formatINR } from "@/lib/cost";
import type { Activity } from "@/lib/ai/schemas";

function fmtMin(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h === 0 ? `${m}m` : m === 0 ? `${h}h` : `${h}h ${m}m`;
}

export function ActivitiesPanel({ placeId, city }: { placeId: string; city: string }) {
  const { destination, activities, toggleActivity } = useTrip();
  const chosen = activities[placeId] ?? [];
  const [list, setList] = useState<Activity[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch("/api/activities", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ destination, city }),
    })
      .then((r) => r.json())
      .then((d) => active && setList(d.activities))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <p className="flex items-center gap-2 py-4 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" /> Finding reputable experiences in {city}…
      </p>
    );

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {list?.map((a) => {
        const isChosen = chosen.some((x) => x.id === a.id);
        return (
          <div
            key={a.id}
            className={cn(
              "flex flex-col rounded-xl border bg-card p-4",
              isChosen && "ring-2 ring-primary",
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold">{a.name}</h4>
              <span className="shrink-0 font-serif text-lg font-semibold">{formatINR(a.price)}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{a.description}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3.5 text-primary" /> {a.provider}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" /> {fmtMin(a.durationMin)}
              </span>
              <span className="flex items-center gap-1">
                <Star className="size-3.5 fill-amber-400 text-amber-400" /> {a.rating}
              </span>
            </div>
            <Button
              variant={isChosen ? "secondary" : "outline"}
              size="sm"
              className="mt-3"
              onClick={() => toggleActivity(placeId, a)}
            >
              {isChosen ? <Check className="size-4" /> : null}
              {isChosen ? "Added" : "Add to trip"}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
