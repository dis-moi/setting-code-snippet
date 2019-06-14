# Setting Code

The LMEM setting code is a snippet of JavaScript that detects if the extension is installed on users’ browser 
and can push settings to the extension (subscriptions, onboarding, etc).


## Getting Started

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

### Usage

1. I want to know whether or not the extension is installed, so I can make up my page accordingly.

    ```javascript
    lmem.onInstall(() => {
      document.querySelector('body').textContent = 'Installation Completed!';
    });
    ```

2. I want to push settings to the extension at will, so I can let the user trigger the settings for example.

    ```javascript
    const options = { subscriptions: ['jdoe'] };
    lmem.pushSettings(options);
    ```

3. I want to know when settings have been set, so I can react and make up my page accordingly.

    ```javascript
    const options = { subscriptions: ['jdoe'] };
    lmem.pushSettings(options, () => {
      document.querySelector('body').textContent = 'Setup Completed!';
    });
    ```


### Options

