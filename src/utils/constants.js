export const LOGO=
        "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR=
        "https://avatars.githubusercontent.com/u/120197478?v=4"

export const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY 
  }
};


export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500"

export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg'

export const SUPPORTED_LANGUAGES=[
  {identifier:"en",name:"English"},
    {identifier:"hindi",name:"Hindi"},
    {identifier:"spanish",name:"Spanish"}
]

export const PERPLEXITY_KEY=process.env.REACT_APP_PERPLEXITY_KEY 


export const PERPLEXITY_URL = 'https://api.perplexity.ai/chat/completions';
export const buildRequestBodyJSON = message => JSON.stringify({
  search_mode: "web",
  reasoning_effort: "low",
  temperature: 0.2,
  top_p: 0.9,
  return_images: false,
  return_related_questions: false,
  top_k: 0,
  stream: false,
  presence_penalty: 0,
  frequency_penalty: 0,
  web_search_options: {
    search_context_size: "low"
  },
  messages: [
    { role: "user", content: message }
  ],
  model: "sonar"
});


