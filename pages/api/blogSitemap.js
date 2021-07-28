import { getAllPostSlugs } from "../../lib/posts";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
