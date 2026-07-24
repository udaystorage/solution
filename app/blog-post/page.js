"use client";
import React, { useState } from "react";
import { Plus, Trash2, Upload, Loader2, X } from "lucide-react";

// Matches the blog object shape:
// { id, slug, title, image, date, readTime, description,
//   content: { introduction, highlights: [], sections: [{heading, brief, paragraphs: []}], takeaway } }

const emptySection = () => ({ heading: "", brief: "", paragraphs: [""] });
const emptyMeta = () => ({ key: "", value: "" });

const DEFAULT_READ_TIME = "5 min read"; // Updated to match the backend schema logic

const initialState = {
  id: null,
  slug: "",
  title: "",
  image: "",
  description: "",
  metadata: [emptyMeta()],
  content: {
    introduction: "",
    highlights: [""],
    sections: [emptySection()],
    takeaway: "",
  },
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function BlogPostForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);
  const [autoSlug, setAutoSlug] = useState(true);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  // ---- top-level field updates ----
  const setField = (key, value) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "title" && autoSlug) {
        next.slug = slugify(value);
      }
      return next;
    });
  };

  const setContentField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      content: { ...prev.content, [key]: value },
    }));
  };

  // ---- highlights (flat string array) ----
  const updateHighlight = (index, value) => {
    setForm((prev) => {
      const highlights = [...prev.content.highlights];
      highlights[index] = value;
      return { ...prev, content: { ...prev.content, highlights } };
    });
  };

  const addHighlight = () => {
    setForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        highlights: [...prev.content.highlights, ""],
      },
    }));
  };

  const removeHighlight = (index) => {
    setForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        highlights: prev.content.highlights.filter((_, i) => i !== index),
      },
    }));
  };

  // ---- metadata (array of {key, value} pairs) ----
  const updateMeta = (index, field, value) => {
    setForm((prev) => {
      const metadata = [...prev.metadata];
      metadata[index] = { ...metadata[index], [field]: value };
      return { ...prev, metadata };
    });
  };

  const addMeta = () => {
    setForm((prev) => ({ ...prev, metadata: [...prev.metadata, emptyMeta()] }));
  };

  const removeMeta = (index) => {
    setForm((prev) => ({
      ...prev,
      metadata: prev.metadata.filter((_, i) => i !== index),
    }));
  };

  // ---- sections (array of {heading, brief, paragraphs[]}) ----
  const updateSectionField = (sIndex, key, value) => {
    setForm((prev) => {
      const sections = [...prev.content.sections];
      sections[sIndex] = { ...sections[sIndex], [key]: value };
      return { ...prev, content: { ...prev.content, sections } };
    });
  };

  const updateParagraph = (sIndex, pIndex, value) => {
    setForm((prev) => {
      const sections = [...prev.content.sections];
      const paragraphs = [...sections[sIndex].paragraphs];
      paragraphs[pIndex] = value;
      sections[sIndex] = { ...sections[sIndex], paragraphs };
      return { ...prev, content: { ...prev.content, sections } };
    });
  };

  const addParagraph = (sIndex) => {
    setForm((prev) => {
      const sections = [...prev.content.sections];
      sections[sIndex] = {
        ...sections[sIndex],
        paragraphs: [...sections[sIndex].paragraphs, ""],
      };
      return { ...prev, content: { ...prev.content, sections } };
    });
  };

  const removeParagraph = (sIndex, pIndex) => {
    setForm((prev) => {
      const sections = [...prev.content.sections];
      sections[sIndex] = {
        ...sections[sIndex],
        paragraphs: sections[sIndex].paragraphs.filter((_, i) => i !== pIndex),
      };
      return { ...prev, content: { ...prev.content, sections } };
    });
  };

  const addSection = () => {
    setForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        sections: [...prev.content.sections, emptySection()],
      },
    }));
  };

  const removeSection = (sIndex) => {
    setForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        sections: prev.content.sections.filter((_, i) => i !== sIndex),
      },
    }));
  };

  // ---- image upload (uploads immediately to /api/upload, stores real URL) ----
  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const body = new FormData();
      body.append("file", file);

      const res = await fetch("/api/upload", { method: "POST", body });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Image upload failed.");
      }

      // If replacing an existing uploaded image, clean up the old file
      if (form.image && form.image.startsWith("/uploads/")) {
        fetch(`/api/upload?url=${encodeURIComponent(form.image)}`, {
          method: "DELETE",
        }).catch(() => {});
      }

      setField("image", result.url);
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message });
    } finally {
      setIsUploadingImage(false);
      e.target.value = ""; // allow re-selecting the same file later
    }
  };

  const handleRemoveImage = () => {
    if (form.image && form.image.startsWith("/uploads/")) {
      fetch(`/api/upload?url=${encodeURIComponent(form.image)}`, {
        method: "DELETE",
      }).catch(() => {});
    }
    setField("image", "");
  };

  // ---- validation + submit ----
  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required.";
    if (!form.slug.trim()) errs.slug = "Slug is required.";
    if (!form.description.trim()) errs.description = "Description is required.";
    if (!form.content.introduction.trim())
      errs.introduction = "Introduction is required.";
    if (!form.content.takeaway.trim()) errs.takeaway = "Takeaway is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (isUploadingImage) {
      setStatusMessage({ type: "error", text: "Please wait for the image to finish uploading." });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    const submissionDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const payload = {
      ...form,
      id: form.id ?? Date.now(),
      date: submissionDate,
      readTime: DEFAULT_READ_TIME,
      metadata: form.metadata
        .filter((m) => m.key.trim() !== "")
        .reduce((acc, m) => ({ ...acc, [m.key.trim()]: m.value }), {}),
      content: {
        ...form.content,
        highlights: form.content.highlights.filter((h) => h.trim() !== ""),
        sections: form.content.sections.map((s) => ({
          ...s,
          paragraphs: s.paragraphs.filter((p) => p.trim() !== ""),
        })),
      },
    };

    // If a custom parent handler is provided, use it
    if (onSubmit) {
      try {
        await onSubmit(payload);
        setForm(initialState);
        setStatusMessage({ type: "success", text: "Blog post published custom!" });
      } catch (err) {
        setStatusMessage({ type: "error", text: err.message || "Submission failed." });
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // Direct integration with the API endpoint
    try {
      const response = await fetch("/api/test-db", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong while saving the post.");
      }

      setForm(initialState);
      setStatusMessage({ type: "success", text: "Blog post successfully published!" });
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800/10 focus:border-neutral-400 transition";
  const labelClass = "text-sm font-semibold text-neutral-700 mb-1.5 block";
  const errorClass = "text-xs text-red-500 mt-1";
  const cardClass = "rounded-2xl border border-neutral-200 bg-white p-6";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto flex flex-col gap-6 px-6 py-10 pt-28"
    >
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold text-neutral-900">
          New blog post
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Fill in the details below to publish a new article.
        </p>
      </div>

      {/* API Submission Status Alert */}
      {statusMessage.text && (
        <div
          className={`p-4 rounded-xl text-sm font-medium border ${
            statusMessage.type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      {/* Basic info */}
      <section className={cardClass}>
        <h2 className="text-base font-semibold text-neutral-800 mb-4">
          Basic information
        </h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className={labelClass}>Title</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Smarter Compliance Automation"
              value={form.title}
              onChange={(e) => setField("title", e.target.value)}
            />
            {errors.title && <p className={errorClass}>{errors.title}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className={labelClass + " mb-0"}>Slug</label>
              <label className="flex items-center gap-1.5 text-xs text-neutral-500 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={autoSlug}
                  onChange={(e) => setAutoSlug(e.target.checked)}
                  className="accent-neutral-800"
                />
                Auto-generate from title
              </label>
            </div>
            <input
              type="text"
              className={inputClass}
              placeholder="smarter-compliance-automation"
              value={form.slug}
              disabled={autoSlug}
              onChange={(e) => setField("slug", slugify(e.target.value))}
            />
            {errors.slug && <p className={errorClass}>{errors.slug}</p>}
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <textarea
              rows={2}
              className={inputClass + " resize-none"}
              placeholder="Short summary shown on the blog listing card"
              value={form.description}
              onChange={(e) => setField("description", e.target.value)}
            />
            {errors.description && (
              <p className={errorClass}>{errors.description}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Cover image</label>

            {form.image ? (
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={form.image}
                  alt="Cover preview"
                  className="h-40 w-full object-cover rounded-xl border border-neutral-200"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                  aria-label="Remove image"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <label className="flex items-center gap-3 rounded-xl border border-dashed border-neutral-300 px-4 py-3 cursor-pointer hover:border-neutral-400 transition">
                {isUploadingImage ? (
                  <>
                    <Loader2 size={16} className="text-neutral-500 animate-spin" />
                    <span className="text-sm text-neutral-500">Uploading...</span>
                  </>
                ) : (
                  <>
                    <Upload size={16} className="text-neutral-500" />
                    <span className="text-sm text-neutral-500">
                      Upload cover image
                    </span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
                  className="hidden"
                  disabled={isUploadingImage}
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>
        </div>
      </section>

      {/* Metadata */}
      <section className={cardClass}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-neutral-800">
              Metadata
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Optional key/value pairs — e.g. SEO tags, author, category.
            </p>
          </div>
          <button
            type="button"
            onClick={addMeta}
            className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-black transition"
          >
            <Plus size={15} /> Add field
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {form.metadata.map((m, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                className={inputClass + " w-2/5"}
                placeholder="Key (e.g. author)"
                value={m.key}
                onChange={(e) => updateMeta(i, "key", e.target.value)}
              />
              <input
                type="text"
                className={inputClass}
                placeholder="Value (e.g. Jordan Lee)"
                value={m.value}
                onChange={(e) => updateMeta(i, "value", e.target.value)}
              />
              {form.metadata.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMeta(i)}
                  className="p-2 text-neutral-400 hover:text-red-500 transition"
                  aria-label="Remove metadata field"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Content: introduction */}
      <section className={cardClass}>
        <h2 className="text-base font-semibold text-neutral-800 mb-4">
          Introduction
        </h2>
        <textarea
          rows={4}
          className={inputClass + " resize-none"}
          placeholder="Opening paragraph that introduces the topic"
          value={form.content.introduction}
          onChange={(e) => setContentField("introduction", e.target.value)}
        />
        {errors.introduction && (
          <p className={errorClass}>{errors.introduction}</p>
        )}
      </section>

      {/* Highlights */}
      <section className={cardClass}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-neutral-800">
            Highlights
          </h2>
          <button
            type="button"
            onClick={addHighlight}
            className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-black transition"
          >
            <Plus size={15} /> Add highlight
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {form.content.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                className={inputClass}
                placeholder={`Highlight ${i + 1}`}
                value={h}
                onChange={(e) => updateHighlight(i, e.target.value)}
              />
              {form.content.highlights.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeHighlight(i)}
                  className="p-2 text-neutral-400 hover:text-red-500 transition"
                  aria-label="Remove highlight"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className={cardClass}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-neutral-800">
            Sections
          </h2>
          <button
            type="button"
            onClick={addSection}
            className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-black transition"
          >
            <Plus size={15} /> Add section
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {form.content.sections.map((section, sIndex) => (
            <div
              key={sIndex}
              className="rounded-xl border border-neutral-200 p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                  Section {sIndex + 1}
                </span>
                {form.content.sections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSection(sIndex)}
                    className="p-1.5 text-neutral-400 hover:text-red-500 transition"
                    aria-label="Remove section"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div>
                <label className={labelClass}>Heading</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Why Compliance Automation Matters"
                  value={section.heading}
                  onChange={(e) =>
                    updateSectionField(sIndex, "heading", e.target.value)
                  }
                />
              </div>

              <div>
                <label className={labelClass}>Brief</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="One-line summary of this section"
                  value={section.brief}
                  onChange={(e) =>
                    updateSectionField(sIndex, "brief", e.target.value)
                  }
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className={labelClass + " mb-0"}>Paragraphs</label>
                  <button
                    type="button"
                    onClick={() => addParagraph(sIndex)}
                    className="flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-black transition"
                  >
                    <Plus size={13} /> Add paragraph
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {section.paragraphs.map((p, pIndex) => (
                    <div key={pIndex} className="flex items-start gap-2">
                      <textarea
                        rows={2}
                        className={inputClass + " resize-none"}
                        placeholder={`Paragraph ${pIndex + 1}`}
                        value={p}
                        onChange={(e) =>
                          updateParagraph(sIndex, pIndex, e.target.value)
                        }
                      />
                      {section.paragraphs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeParagraph(sIndex, pIndex)}
                          className="p-2 text-neutral-400 hover:text-red-500 transition"
                          aria-label="Remove paragraph"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Takeaway */}
      <section className={cardClass}>
        <h2 className="text-base font-semibold text-neutral-800 mb-4">
          Takeaway
        </h2>
        <textarea
          rows={3}
          className={inputClass + " resize-none"}
          placeholder="Closing summary of the article's main point"
          value={form.content.takeaway}
          onChange={(e) => setContentField("takeaway", e.target.value)}
        />
        {errors.takeaway && <p className={errorClass}>{errors.takeaway}</p>}
      </section>

      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => {
            if (form.image && form.image.startsWith("/uploads/")) {
              fetch(`/api/upload?url=${encodeURIComponent(form.image)}`, {
                method: "DELETE",
              }).catch(() => {});
            }
            setForm(initialState);
            setStatusMessage({ type: "", text: "" });
          }}
          className="px-6 py-2.5 rounded-full text-sm font-semibold text-neutral-600 hover:text-black transition disabled:opacity-50"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={isSubmitting || isUploadingImage}
          className="px-8 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:shadow-lg transition cursor-pointer disabled:bg-neutral-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Publishing..." : "Publish post"}
        </button>
      </div>
    </form>
  );
}