# How to Update

This document outlines how to update parts of the website. See [Contributing](https://github.com/UoGSOCIS/socis_website/blob/main/docs/Contributing.md) to see how to contribute to the repo. 

## Exec/staff list

Open `src/pages/about/components/execList.js`. This file contains the full list of exec and staff including their names,
roles, and description. By editing this file you can update the contents of the site.

### Updating

Edit the content in `execList.js`.

To update profile pictures, replace the corresponding images in `src/pages/about/assets`. Make sure the file names match
the imported images in `execList.js`.

### Adding

Add a new individual in `execList.js`. Be sure to include the position, name, image and description fields.

To upload an image, add the image to `src/pages/about/assets`. Then import the image in `execList.js`:

```javascript
import Exec from '../assets/exec.jpeg';
```

### Removing

Open `execList.js`, find the individual and either comment them out or delete their section. Also delete their image in
`src/pages/about/assets`.

## Policy documents

The original policy documents can be found on the SOCIS google drive.

### Updating

Go to `src/pages/policy/assets` and replace the policy documents with the newer version. Next, open `src/pages/policy/components/header.jsx`
and update the `Last updated` string to today's date.

### Adding

To add new policy documents, first add the new policy document to `src/pages/policy/assets`. Then in `src/pages/policy/index.jsx`
import the policy document:

```javascript
import policyDocument from './assets/Policy.pdf';
```

Then add the component to the functional component:

```javascript
<FileViewer heading="Policy" file={policyDocument} />
```

### Removing

To remove policies, delete the corresponding document in `src/pages/policy/assets`. Then open `src/pages/policy/index.jsx`
and remove the lines for the component:

```javascript
import policyDocument from './assets/Policy.pdf';
```

```javascript
<FileViewer heading="Policy" file={policyDocument} />
```
