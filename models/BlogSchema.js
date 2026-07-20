const mongoose = require('mongoose');

// Sub-schema for individual article sections
const SectionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    trim: true
  },
  brief: {
    type: String,
    trim: true
  },
  paragraphs: [{
    type: String,
    trim: true
  }]
}, { _id: false }); // Prevents Mongoose from auto-generating an _id for every sub-document section

// Sub-schema for the main content block
const ContentSchema = new mongoose.Schema({
  introduction: {
    type: String,
    required: true,
    trim: true
  },
  highlights: [{
    type: String,
    trim: true
  }],
  sections: [SectionSchema],
  takeaway: {
    type: String,
    trim: true
  }
}, { _id: false });

// The Primary Blog/Article Schema
const ArticleSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true // Assumes this is a unique custom identifier
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String, // Stores the URL or path to the image
    default: null
  },
  date: {
    type: Date, // Native Date type is better for sorting/filtering than a plain string
    required: true,
    default: Date.now
  },
  readTime: {
    type: String, // e.g., "5 min read"
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: ContentSchema,
    required: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;