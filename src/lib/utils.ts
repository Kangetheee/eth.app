import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string | null | undefined): string => {
  if (!name || typeof name !== "string") {
    return "?";
  }

  const trimmedName = name.trim();
  if (!trimmedName) {
    return "?";
  }

  return trimmedName
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .substring(0, 2);
};

export function formatAmount(amount: string | number) {
  if (typeof amount !== "number" && typeof amount !== "string") return amount;
  const amt = typeof amount === "number" ? amount : Number(amount);

  return amt.toLocaleString("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatNumber(amount: string | number) {
  if (typeof amount !== "number" && typeof amount !== "string") return amount;
  const amt = typeof amount === "number" ? amount : Number(amount);

  return amt.toLocaleString("en-KE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatPhone(phone: string) {
  if (!phone.startsWith("+")) phone = `+${phone}`;
  return phone;
}

export function arrayDiff<T>(initialArr: T[], arr2: T[]) {
  return JSON.stringify(initialArr) === JSON.stringify(arr2) ? undefined : arr2;
}

const truncateString = (value: string, maxLength = 100) => {
  return value.length > maxLength ? value.slice(0, maxLength) + "…" : value;
};

export const truncateMetadata = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: Record<string, any>,
  maxLength = 100
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const truncated: Record<string, any> = {};

  for (const [key, value] of Object.entries(metadata)) {
    if (typeof value === "string") {
      truncated[key] = truncateString(value, maxLength);
    } else {
      truncated[key] = value;
    }
  }

  return truncated;
};

export function formatDate(date: string) {
  try {
    return format(new Date(date), "PPp");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return date;
  }
}

export async function computeSHA256(image: Blob) {
  const buffer = await image.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((hash) => hash.toString(16).padStart(2, "0")).join("");
}

export function formatFileSize(bytes: number) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function extractPreview(
  html: string,
  subjectToAvoid?: string
): string | null {
  const paragraphs = html.match(
    /<p[^>]*>([^<]+(?:<[^>]*>[^<]*<\/[^>]*>[^<]*)*)<\/p>/gi
  );
  if (paragraphs) {
    for (const paragraph of paragraphs) {
      const textMatch = paragraph.match(/<p[^>]*>(.*?)<\/p>/i);
      if (textMatch) {
        const text = textMatch[1]
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        if (
          text &&
          text.length > 20 &&
          !text.match(/^(dear|hello|hi|greetings)/i) &&
          !text.match(/^(thank you for|thanks for)/i) &&
          (!subjectToAvoid ||
            !text.toLowerCase().includes(subjectToAvoid.toLowerCase()))
        ) {
          return text.length > 150 ? text.substring(0, 150) + "..." : text;
        }
      }
    }
  }

  const cleanText = html
    .replace(/<style[^>]*>.*?<\/style>/gi, "")
    .replace(/<script[^>]*>.*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (
    cleanText.length > 0 &&
    (!subjectToAvoid ||
      !cleanText.toLowerCase().includes(subjectToAvoid.toLowerCase()))
  ) {
    return cleanText;
  }

  return null;
}