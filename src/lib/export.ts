"use client";

/**
 * Lightweight, dependency-free exports.
 * - Excel: an HTML-table workbook that Excel opens natively as .xls.
 * - PDF: handled via window.print() against a print stylesheet (see globals.css).
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export interface Sheet {
  name: string;
  headers: string[];
  rows: (string | number)[][];
}

export function downloadExcel(filename: string, sheets: Sheet[]) {
  const tables = sheets
    .map(
      (s) => `
      <h3>${escapeHtml(s.name)}</h3>
      <table border="1" cellspacing="0" cellpadding="4">
        <thead><tr>${s.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
        <tbody>
          ${s.rows
            .map(
              (r) =>
                `<tr>${r
                  .map((c) => `<td>${escapeHtml(String(c))}</td>`)
                  .join("")}</tr>`,
            )
            .join("")}
        </tbody>
      </table>`,
    )
    .join("<br/>");

  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"/></head><body>${tables}</body></html>`;
  const blob = new Blob([html], { type: "application/vnd.ms-excel" });
  triggerDownload(blob, filename.endsWith(".xls") ? filename : `${filename}.xls`);
}

export function downloadPdf() {
  // Browser print dialog → "Save as PDF". Print CSS keeps only the itinerary.
  window.print();
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
