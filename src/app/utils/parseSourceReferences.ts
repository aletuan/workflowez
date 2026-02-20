/**
 * Extracts source references from assistant message content.
 * Handles patterns like:
 * - (Theo EMPLOYEE_TRAINING_VI.md)
 * - (Theo file1.md, file2.md)
 * - (Nguồn: document.pdf)
 * - (Source: doc.md)
 */

const SOURCE_PATTERNS = [
  // (Theo X) or (Theo X, Y, Z) - Vietnamese "According to"
  /\(Theo\s+([^)]+)\)/gi,
  // (Nguồn: X) - Vietnamese "Source:"
  /\(Nguồn\s*:\s*([^)]+)\)/gi,
  // (Source: X)
  /\(Source\s*:\s*([^)]+)\)/gi,
  // [Source: X]
  /\[Source\s*:\s*([^\]]+)\]/gi,
];

/**
 * Parse content and extract { mainContent, sources }.
 * Sources are stripped from mainContent and returned separately.
 */
export function parseSourceReferences(content: string): {
  mainContent: string;
  sources: string[];
} {
  if (!content || typeof content !== "string") {
    return { mainContent: content || "", sources: [] };
  }

  let mainContent = content.trim();
  const foundSources: string[] = [];

  for (const pattern of SOURCE_PATTERNS) {
    const matches = mainContent.matchAll(pattern);
    for (const match of matches) {
      const raw = match[1]?.trim();
      if (raw) {
        // Split by comma in case of multiple: "file1.md, file2.md"
        const parts = raw
          .split(",")
          .map((s) => s.trim().replace(/\.{2,}$/, "").trim())
          .filter(Boolean);
        foundSources.push(...parts);
      }
    }
  }

  if (foundSources.length === 0) {
    return { mainContent, sources: [] };
  }

  // Remove source references from content (typically at the end)
  // Remove each matched pattern from the string
  let cleaned = mainContent;
  for (const pattern of SOURCE_PATTERNS) {
    cleaned = cleaned.replace(pattern, "").trim();
  }
  // Clean trailing punctuation/whitespace/newlines
  cleaned = cleaned.replace(/\s*[,\-–—]\s*$/, "").trim();
  cleaned = cleaned.replace(/\n{2,}\s*$/, "\n").trim();

  const uniqueSources = [...new Set(foundSources)];

  return { mainContent: cleaned, sources: uniqueSources };
}
