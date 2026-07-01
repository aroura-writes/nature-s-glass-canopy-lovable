import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getPost, type Section } from "@/lib/content";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";

export function SectionPost({ section }: { section: Section }) {
  const { postSlug } = useParams<{ postSlug: string }>();
  const post = postSlug ? getPost(section.slug, postSlug) : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.frontmatter.title} — Nature's Symphony`;
    }
  }, [post]);

  if (!post) return <NotFound />;

  const { frontmatter, body } = post;

  return (
    <article className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          to={`/${section.slug}`}
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back to {section.label}
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          {frontmatter.date && (
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              {frontmatter.date}
            </div>
          )}
          <h1 className="mt-3 font-display text-5xl tracking-wider md:text-7xl">
            {frontmatter.title}
          </h1>
          {frontmatter.excerpt && (
            <p className="mt-4 text-lg text-foreground/80">
              {frontmatter.excerpt}
            </p>
          )}
        </motion.header>

        {frontmatter.cover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass mt-8 overflow-hidden rounded-3xl p-2"
          >
            <img
              src={frontmatter.cover}
              alt={frontmatter.title}
              className="aspect-[21/10] w-full rounded-2xl object-cover"
            />
          </motion.div>
        )}

        <div className="glass prose-nature mt-10 rounded-3xl p-8 md:p-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {body}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
