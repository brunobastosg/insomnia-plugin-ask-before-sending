# insomnia-plugin-ask-before-sending

[![](https://img.shields.io/npm/v/insomnia-plugin-ask-before-sending.svg)](https://www.npmjs.com/package/insomnia-plugin-ask-before-sending)
[![](https://img.shields.io/badge/license-MIT-yellow)](https://github.com/brunobastosg/insomnia-plugin-ask-before-sending/blob/master/LICENSE)

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
  * [Installation](#installation)
  * [Configuration](#configuration)

## Overview <a name="overview"></a>
An Insomnia plugin that asks for confirmation before sending a request, useful for production environments.

## Usage <a name="usage"></a>

### Installation <a name="installation"></a>

#### From the Plugins Tab
1. Open Insomnia
2. Go to Application > Preferences > Plugins
3. Type "insomnia-plugin-ask-before-sending"
4. Click "Install Plugin"

#### Manual Installation
1. Download "insomnia-plugin-ask-before-sending.zip" from [Releases > Assets](https://github.com/brunobastosg/insomnia-plugin-ask-before-sending/releases)
2. Go to Application > Preferences > Plugins
3. Click "Show Plugins Folder"
4. Extract the zip from step 1 to the "plugins" folder
5. Click "Reload Plugin List"

### Configuration <a name="configuration"></a>

Update your [environment](https://support.insomnia.rest/article/18-environment-variables):
1. Click "Manage Environments"
2. Create a "askBeforeSending" environment variable with the HTTP methods that need confirmation before sending:

```json
{
  "askBeforeSending": ["POST", "PUT", "DELETE"]
}
```
