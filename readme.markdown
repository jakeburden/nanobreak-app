# nanobreak-app (work in progress)

> relaxation and productivity app 

A menubar application that prompts you take short breaks for half a minute, and once in a while will ask you to take some notes about your progress for the last hour or so.

Note: not much is built yet except for the countdown and button, feedback and contributions are welcome :D

![](nanobreak.jpg)

## Contributing

- fork and clone the repo, configure upstream to pull updates

```bash
$ git clone git@github.com:<your-username>/nanobreak-app.git
$ cd <repo-name>
$ git remote add upstream https://github.com/jekrb/nanobreak-app

```

- install dependencies

```bash
$ npm install
```

- build and watch the browserify bundle in one terminal window

```bash
$ npm run watch
```

- start electron in another terminal window

```bash
$ npm start
```

## TODO

- [ ] Tests
- [x] Design and build a functioning countdown stopwatch
- [ ] Design and build dialog telling user it is time to relax
- [ ] Desgin and build prompt asking the user to write progress notes
- [ ] Make an offical nanobreak desktop icon
- [ ] Package app for release