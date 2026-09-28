import { sanityClient } from "./client";

export const testPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    coverImage {
      asset,
      alt,
      caption
    },
    author->{
      _id,
      name
    },
    body,
    highlights,
    takeaway,
    faq[]{
      question,
      answer
    }
  }
`;

export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    updatedAt,
    readTime,

    coverImage {
      asset,
      alt,
      caption
    },

    author->{
      _id,
      name,
      "slug": slug.current,
      bio,
      image
    },

    category->{
      _id,
      title,
      "slug": slug.current
    },

    tags,
    highlights,
    takeaway,
    body,

    faq[]{
      question,
      answer
    },

    seo{
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImage,
      noIndex
    }
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    updatedAt,
    readTime,

    coverImage {
      asset,
      alt,
      caption
    },

    author->{
      _id,
      name,
      "slug": slug.current,
      bio,
      image
    },

    category->{
      _id,
      title,
      "slug": slug.current
    },

    tags,
    highlights,
    takeaway,
    body,

    faq[]{
      question,
      answer
    },

    seo{
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImage,
      noIndex
    }
  }
`;

export async function getAllPosts() {
  return sanityClient.fetch(allPostsQuery);
}

export async function getPostBySlug(slug) {
  return sanityClient.fetch(postBySlugQuery, { slug });
}