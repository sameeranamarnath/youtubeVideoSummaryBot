Langchain HNWSLib based chatbot which retrieves the transcript of a given youtube
url and answers questions only based on the relevant video.

Click the pic to see it in action:
[![Sample of the working app:](https://github.com/sameeranamarnath/youtubeVideoSummaryBot/assets/85400557/646d7092-85d6-47b9-b2f9-e51348b96e91)](https://clipchamp.com/watch/w4mao2IgjnT)

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
runs on localhost:3000
