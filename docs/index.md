---
layout: default
---

## Getting Started!

### Domain Verification

For technical limitations and security concerns, contributors that want to use the setting code on
their own Website, have to be explicitly granted.

Contributors can query verification by reaching us out {coming soon}. Contributor will be asked
to prove they own the domain they want to use the setting code on. Each verification request
will be manually reviewed.

Once verified, the extension is published with an upgraded manifest allowing the contributor’s domain
to use the setting code.

Finally, the setting code may be directly added to the HTML of any page on the contributor’s website.

### Installation

First, copy/paste `dist/main.js` somewhere in your Web page.

#### I want to know whether or not the extension is installed, so I can make up my page accordingly.

```javascript
lmem.onInstall(() => {
  document.querySelector('body').textContent = 'Installation Completed!';
});
```

##### The extension answers with some infos such as the currently installed version...

```javascript
lmem.onInstall((installationDetails) => {
  console.log(installationDetails);
});
```

#### I want to push settings to the extension at will, so I can let the user trigger the settings for example.

```javascript
const options = { subscriptions: ['jdoe'] };
lmem.pushSettings(options);
```

#### I want to know when settings have been set, so I can react and make up my page accordingly.

```javascript
const options = { subscriptions: ['jdoe'] };
lmem.pushSettings(options, () => {
  document.querySelector('body').textContent = 'Setup Completed!';
});
```

##### Options

- `subscriptions: number[]` a list of contributors identifiers to subscribe to


---
