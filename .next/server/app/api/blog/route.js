(()=>{var e={};e.id=778,e.ids=[778],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4042:(e,t,a)=>{"use strict";a.r(t),a.d(t,{patchFetch:()=>y,routeModule:()=>x,serverHooks:()=>v,workAsyncStorage:()=>h,workUnitAsyncStorage:()=>f});var r={};a.r(r),a.d(r,{POST:()=>g});var s=a(6559),o=a(8088),i=a(7719),n=a(2190),l=a(9748),p=a.n(l),m=a(3873),c=a.n(m);let d=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/--+/g,"-").trim(),u=(e,t,a,r,s,o,i)=>{let n=new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),l=o.map(e=>`<span key="${e}" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">${e}</span>`).join("\n            ");return`import type { Metadata } from "next"
import { Bot, Calendar, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: \`${e} | ContentCraft\`,
  description: \`${t}\`,
  authors: [{ name: \`${r}\` }],
  openGraph: {
    title: \`${e}\`,
    description: \`${t}\`,
    url: \`https://contentcraft.ai/blog/${a}\`,
    type: "article",
    publishedTime: \`${new Date(s).toISOString()}\`,
    authors: [\`${r}\`],
    images: [{ url: \`${i}\`, width: 1200, height: 630, alt: \`${e}\` }],
  },
  twitter: {
    card: "summary_large_image",
    title: \`${e}\`,
    description: \`${t}\`,
    images: [\`${i}\`],
  },
  alternates: {
    canonical: \`https://contentcraft.ai/blog/${a}\`,
  },
}

export default function Page() {
  return (
    <div className="bg-white text-gray-800">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-600" />
            <a href="/" className="text-2xl font-bold text-gray-900">ContentCraft</a>
          </div>
          <Button variant="outline"><a href="/book-meeting">Book a Meeting</a></Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="mb-4 text-sm text-gray-600">
            <a href="/blog" className="hover:text-blue-600">Blog</a>
            <span className="mx-2">/</span>
            <span>${e}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">${e}</h1>
          <p className="text-xl text-gray-600 mb-8">${t}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-500 text-sm mb-8 border-t border-b py-4">
            <div className="flex items-center"><User className="w-4 h-4 mr-2" /> ${r}</div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> <time dateTime="${s}">${n}</time></div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 min read</div>
          </div>
          <div className="mb-8">
            <Image
              src="${i}"
              alt="${e}"
              width={1200}
              height={630}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <p>This is the beginning of your blog post. Write something amazing!</p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 mr-2 text-gray-500" />
            ${l}
          </div>
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; ${new Date().getFullYear()} ContentCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
`};async function g(e){if(e.headers.get("Authorization")!==`Bearer ${process.env.ZAPIER_SECRET_TOKEN}`)return n.NextResponse.json({error:"Unauthorized"},{status:401});try{let{title:t,excerpt:a,author:r,tags:s,featuredImage:o}=await e.json();if(!t||!a)return n.NextResponse.json({error:"Title and excerpt are required"},{status:400});let i=d(t),l=new Date().toISOString().split("T")[0],m=c().join(process.cwd(),"app/blog",i);await p().mkdir(m,{recursive:!0});let g={title:t,excerpt:a,date:l,slug:i,author:r||"ContentCraft Team",tags:s||["General"],featuredImage:o||"/images/blog/default.jpg"};await p().writeFile(c().join(m,"metadata.json"),JSON.stringify(g,null,2));let x=u(t,a,i,g.author,l,g.tags,g.featuredImage);return await p().writeFile(c().join(m,"page.tsx"),x),n.NextResponse.json({message:"Blog post created successfully",slug:i},{status:201})}catch(e){return console.error("Error creating blog post:",e),n.NextResponse.json({error:"Internal Server Error"},{status:500})}}let x=new s.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/blog/route",pathname:"/api/blog",filename:"route",bundlePath:"app/api/blog/route"},resolvedPagePath:"/Users/Jonathan H Teplitsky/Dropbox/My Mac (Jonathan’s Mac mini)/Desktop/v0-content-craft/app/api/blog/route.ts",nextConfigOutput:"",userland:r}),{workAsyncStorage:h,workUnitAsyncStorage:f,serverHooks:v}=x;function y(){return(0,i.patchFetch)({workAsyncStorage:h,workUnitAsyncStorage:f})}},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6487:()=>{},8335:()=>{},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9748:e=>{"use strict";e.exports=require("fs/promises")}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[447,580],()=>a(4042));module.exports=r})();