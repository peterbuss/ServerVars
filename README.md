# co4c547f7b193a8980eaca3fa

Quick start:

```
$ npm install
$ npm start
````

Head over to https://vitejs.dev/ to learn more about using vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!

From me the coder, on adding a netlify serverless function

$ npm install netlify-cli -g

$ netlify init

=> created .netlify directory

npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated

added 48 packages, removed 3 packages, and changed 1278 packages in 6m

214 packages are looking for funding
  run `npm fund` for details

D:\Documents\React\Scrimba\AI Engineering\NetlifyServerlessFcts>
D:\Documents\React\Scrimba\AI Engineering\NetlifyServerlessFcts>
D:\Documents\React\Scrimba\AI Engineering\NetlifyServerlessFcts>netlify init

Adding local .netlify folder to .gitignore file...
? What would you like to do? ⇄  Connect this directory to an existing Netlify site

netlify link will connect this folder to a site on Netlify

? How do you want to link this folder to a site? Use current git remote origin (https://github.com/peterbuss/ServerVars)



Looking for sites connected to 'https://github.com/peterbuss/ServerVars'...


Directory Linked

Admin url: https://app.netlify.com/sites/servervars
Site url:  https://servervars.netlify.app

You can now run other `netlify` cli commands in this directory


Success
This site "servervars" is configured to automatically deploy via https://github.com/peterbuss/ServerVars

D:\Documents\React\Scrimba\AI Engineering\NetlifyServerlessFcts>

Now use the netlify cli to give the serverless function

$ netlify functions:create

? Select the type of function you'd like to create Serverless function (Node/Go/Rust)

◈ functions directory not specified in netlify.toml or UI settings
? Enter the path, relative to your site, where your functions should live: netlify/functions
◈ updating site settings with netlify/functions
◈ functions directory netlify/functions updated in site settings
◈ functions directory netlify\functions does not exist yet, creating it...
◈ functions directory netlify\functions created
? Select the language of your function JavaScript
(node:16608) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
(node:16608) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(node:16608) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(node:16608) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
? Pick a template javascript-hello-world
? Name your function: fetchAI
◈ Creating function fetchAI
◈ Created D:\Documents\React\Scrimba\AI Engineering\NetlifyServerlessFcts\netlify\functions\fetchAI\fetchAI.js

Function created!

"type" : "module" in package.json not done!

D:\Documents\React\Scrimba\AI Engineering\NetlifyServerlessFcts>

Type the url https://main--servervars.netlify.app/.netlify/functions/fetchAI

should get {"message":"Hello World"} in the browser and it does!

So now build ai into app

First modify index to make a fetch request to serverless function

=> I got "Hello World" in the console as expected, good!

in console message!

Now add AI processing to serverless function fetchAI.js

ok.


