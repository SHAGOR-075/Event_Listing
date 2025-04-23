import{j as r}from"./index-CWOytK02.js";const b=({children:o,type:t="button",variant:a="primary",className:n="",isLoading:e=!1,disabled:s=!1,onClick:i,...d})=>{const c="px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",l={primary:"bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",secondary:"bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",outline:"border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"};return r.jsx("button",{type:t,className:`
        ${c} 
        ${l[a]} 
        ${s||e?"opacity-50 cursor-not-allowed":""}
        ${n}
      `,disabled:s||e,onClick:i,...d,children:e?r.jsxs("div",{className:"flex items-center justify-center",children:[r.jsx("div",{className:"w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"}),r.jsx("span",{children:"Loading..."})]}):o})};export{b as B};
