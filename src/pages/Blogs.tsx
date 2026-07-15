import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import { DocumentIcon, LinkIcon } from '../components/ecraft/icons'

const onPageFactors = [
  {
    n: 1,
    title: 'Website URL Structure',
    desc: 'URL should be short and clean with one main keyword in the URL to improve the visibility in the search engines.',
  },
  {
    n: 2,
    title: 'Meta Tags',
    desc: 'Meta tags should be optimized for the natural use of target keywords in the title, description, Heading tags, etc.',
  },
  {
    n: 3,
    title: 'Keyword Density',
    desc: 'Avoid the over stuffing and maintain the keyword optimization by keeping the keyword density to be 1-2%.',
  },
  {
    n: 4,
    title: 'Keyword Proximity',
    desc: 'Keyword proximity refers to how close keywords are to each other in a sentence. Example: "SEO services are affordable in India" demonstrates proximity of 3 words between "SEO services" and "India."',
  },
  {
    n: 5,
    title: 'Image ALT Text',
    desc: 'Insert one keyword in the ALT text of the image to make search engine understand what the image is all about.',
  },
  {
    n: 6,
    title: 'Internal and Outbound Linking Optimization',
    desc: 'Avoid bounce rates by linking the relevant anchor text to the target page. Add relevant outbound links to make the post more authoritative.',
  },
  {
    n: 7,
    title: 'Canonical Tags',
    desc: 'Avoid duplicate content issues on the site by adding the canonical tag and make only one web page to be preferred version on the site.',
  },
  {
    n: 8,
    title: 'Site Speed',
    desc: 'Optimize the speed of the site to 5 seconds by minifying JS and CSS scripts. Keep the size of the image under 100 kb. Use CDN or content delivery network to boost the speed of the site.',
  },
  {
    n: 9,
    title: 'Website Errors',
    desc: 'User experience is crucial for rankings, so resolve all the 404, 500 errors. You can also use the 301 redirection for the broken links to pass the link juice or delete if it is not anywhere linked to the sites.'
  },
  {
    n: 10,
    title: 'Sitemaps',
    desc: 'XML sitemap is for crawling of the site by bots and indexing on the search engines. HTML sitemap is for providing the navigation for the site having many web pages.',
  },
  {
    n: 11,
    title: 'Robots.txt',
    desc: 'It is the file which allows or disallows the certain web pages or directories to crawl.',
  },
  {
    n: 12,
    title: 'Redirections',
    desc: '301 is permanent redirection which passes the link juice to a particular page. 302 is a temporary redirection and use only for temporary purposes.',
  },
  {
    n: 13,
    title: 'Mobile Friendliness',
    desc: 'It is necessary to have the mobile version of the site to appear higher in the SERPs. With the mobile-first indexing, a mobile version of the site is preferred by search engines to rank at a higher position over desktop version.',
  },
  {
    n: 14,
    title: 'Crawling & Indexing',
    desc: 'Crawling is the process of following the links through search engine bots. Indexing refers to adding the web pages on the search engine result pages.',
  },
  {
    n: 15,
    title: 'Addition of Tracking Codes',
    desc: 'Tracking codes are important to track the key metrics of the site such as average time spent on the site, bounce rate, traffic sources and conversions.',
  },
  {
    n: 16,
    title: 'Breadcrumbs',
    desc: 'It helps in providing the proper navigation for reducing the number of steps to reach a particular target page.',
  },
  {
    n: 17,
    title: 'Text / HTML Ratio',
    desc: 'It should be around 25-70%. This ratio refers to the visible content to the nonvisible content such as an image.',
  },
  {
    n: 18,
    title: 'W3C Validation',
    desc: 'It helps in ensuring the technical qualities by checking if the HTML and XHTML markups are proper.',
  },
  {
    n: 19,
    title: 'Schema Implementations',
    desc: 'It enhances the meta description by providing the valuable information to the users. Local, person, product, event, price and website are some common types of schema.',
  },
  {
    n: 20,
    title: 'Social Sharing Buttons',
    desc: 'It encourages the social sharing of the posts or pages to the social networks. The total share count helps in creating the credibility for the brand to the users.',
  },
  {
    n: 21,
    title: 'NoFollow',
    desc: 'If you don\'t want to follow the link and pass the link juice then add this tag as rel="nofollow". This tag is mainly used for external links on the site.',
  },
  {
    n: 22,
    title: 'Noindex',
    desc: 'If you want that the particular page should not be indexed then add the no index tag: <meta name="robots" content="noindex">.',
  },
]

const offPageFactors = [
  {
    n: 23,
    title: 'Domain Authority',
    desc: 'It is the complete authority of the domain or site. It ranges from 0-100 where 0 is the lowest and 100 is the highest.',
  },
  {
    n: 24,
    title: 'Page Authority',
    desc: 'It is the authority of a page based on links shared on different sites. It ranges from 0-100 where 0 is the lowest and 100 is the highest.',
  },
  {
    n: 25,
    title: 'Trust Flow',
    desc: 'It is the score given to the site based on the credibility of the site to the users. If quality link building is performed than the trust factor for the site will be good resulting in high trust flow.',
  },
  {
    n: 26,
    title: 'Citation Flow',
    desc: 'It refers to the accurate citation and brand consistency on the web. To increase the citation flow score, build accurate citations on the authoritative sites.',
  },
  {
    n: 27,
    title: 'Social Shares',
    desc: 'It helps to earn the trust and encourage the sharing of posts resulting in engagements and social traffic to the site.',
  },
  {
    n: 28,
    title: 'Link Juice',
    desc: 'It is the authority passed to the site from the links and helpful in increasing the Page Rank of the site.',
  },
  {
    n: 29,
    title: 'Page Rank',
    desc: 'It ranges from 0-10 where 0 is the lowest and 10 is the highest. In order to improve the Page Rank, build quality links for the web pages.',
  },
  {
    n: 30,
    title: 'Anchor Text',
    desc: 'It is a hyperlink text pointing to the web pages on the site or other sites. It should be build by linking the relevant or related keywords.',
  },
]

function FactorCard({ factor }: { factor: { n: number; title: string; desc: string } }) {
  return (
    <div className="card border-glow-card rounded-[18px] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] group">
      <div className="flex items-start gap-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-black text-sm"
          style={{ background: 'rgba(245,158,11,0.12)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          {factor.n}
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm mb-1.5 group-hover:text-gold transition-colors">
            {factor.title}
          </h3>
          <p className="text-slate-400 text-[13px] leading-relaxed">{factor.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Blogs() {
  usePageMeta(
    'Blog — SEO Ranking Factors Must Know | Ecraft Media',
    'There are 200 SEO ranking factors Google considers to rank a site. Here are the 30 most important On-Page and Off-Page SEO factors to optimize for maximum visibility.'
  )

  return (
    <main className="min-h-screen bg-base text-white">
      {/* Page hero */}
      <section className="relative overflow-hidden px-4 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.12),_transparent_40%)] pointer-events-none" />
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto mb-5">Blog</div>
            <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-tight mb-6">
              Blog
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Stay updated with the latest insights on SEO, web development, mobile apps, and digital marketing.
            </p>
          </div>

          {/* Blog post card */}
          <article className="max-w-4xl mx-auto">
            {/* Post header */}
            <div className="card border-glow-card rounded-[32px] overflow-hidden mb-8">
              <div
                className="px-8 py-8"
                style={{ borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(139,92,246,0.06))' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="section-tag">Posts</span>
                  <span className="section-tag" style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.2)', color: '#A78BFA' }}>
                    Blog
                  </span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight mb-4">
                  SEO Ranking Factors Must Know
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-[12px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    March 15, 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Ecraft Media Team
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    SEO · Digital Marketing
                  </span>
                </div>
              </div>

              {/* Introduction */}
              <div className="px-8 py-8">
                <div
                  className="p-6 rounded-[20px] mb-8"
                  style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)' }}
                >
                  <p className="text-slate-200 text-base leading-relaxed">
                    There are <strong className="text-gold">200 SEO ranking factors</strong> Google considers to rank a site. But there are{' '}
                    <strong className="text-white">30 SEO most important factors</strong> which should be utilized to optimize the site to improve
                    the visibility in the search engines.
                  </p>
                  <p className="text-slate-400 text-sm mt-3">
                    The factors divide into two categories: <span className="text-gold font-semibold">On Page SEO</span> and{' '}
                    <span className="text-violet font-semibold" style={{ color: '#A78BFA' }}>Off Page SEO</span>.
                  </p>
                </div>

                {/* On-Page SEO */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)', color: '#F59E0B' }}
                    >
                      <DocumentIcon className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">On Page SEO Ranking Factors</h3>
                      <p className="text-slate-500 text-sm">Factors 1 – 22</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {onPageFactors.map(f => (
                      <FactorCard key={f.n} factor={f} />
                    ))}
                  </div>
                </div>

                {/* Off-Page SEO */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)', color: '#A78BFA' }}
                    >
                      <LinkIcon className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">Off Page SEO Ranking Factors</h3>
                      <p className="text-slate-500 text-sm">Factors 23 – 30</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {offPageFactors.map(f => (
                      <FactorCard key={f.n} factor={f} />
                    ))}
                  </div>
                </div>

                {/* Closing */}
                <div
                  className="p-6 rounded-[20px]"
                  style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}
                >
                  <p className="text-slate-200 text-base leading-relaxed">
                    So optimize your site for these SEO ranking factors and drive massive traffic to the site.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment form */}
            <div className="card border-glow-card rounded-[32px] p-8 mb-8">
              <h3 className="font-display font-bold text-xl text-white mb-2">Leave a Reply</h3>
              <p className="text-slate-500 text-sm mb-6">
                Your email address will not be published. Required fields are marked{' '}
                <span className="text-gold">*</span>
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Comment <span className="text-gold">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-[20px] border border-white/[0.06] bg-[#02050B] px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                    style={{ resize: 'none' }}
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {['Name *', 'Email *', 'Website'].map(label => (
                    <div key={label}>
                      <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        {label}
                      </label>
                      <input
                        type={label === 'Email *' ? 'email' : label === 'Website' ? 'url' : 'text'}
                        className="w-full rounded-[20px] border border-white/[0.06] bg-[#02050B] px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                      />
                    </div>
                  ))}
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 accent-gold"
                  />
                  <span className="text-[13px] text-slate-400">
                    Save my name, email, and website in this browser for the next time I comment.
                  </span>
                </label>
                <button type="submit" className="btn-primary px-8 py-3 text-sm">
                  Post Comment
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-[1320px] mx-auto">
          <div
            className="rounded-[32px] p-10 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.07), rgba(139,92,246,0.05))', border: '1px solid var(--border)' }}
          >
            <h2 className="font-display font-bold text-3xl text-white mb-3">
              Not enough for your seo needs?
            </h2>
            <p className="text-slate-400 mb-6">We Support Globalized Digital Marketing &amp; SEO Service</p>
            <Link to="/contacts" className="btn-primary px-8 py-3 text-sm">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
