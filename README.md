Langchain HNWSLib based chatbot which retrieves the transcript of a given youtube
url and answers questions only based on the relevant video.

Uses the YouTube transcript api unofficial, Text Splitters, and the Conversational Retrieval QA CHain

Current limitation:
if the youtube video has a short transcript, the bot works fine, this has to do with the
openai api limitations. There are definitely better ways to do the same without dependence on
openai api.

Uses nextjs, langchain, tailwind css, openai api

How to use it:

create .env file with the following value:
OPENAI_API_KEY="your-openai-api-key"

Navigate to folder

Install dependencies from package.json

```
npm install
```

Then, run the development server:
npm run dev

Open [http: //localhost :3000](http: //localhost :3000) with your browser to see the app.
