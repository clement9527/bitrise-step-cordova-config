const Config = require('cordova-config');
const path = require('path');

const SOURCE_PATH = process.env['BITRISE_SOURCE_DIR'];
const CONFIG_FILE_PATH = process.env['config_path'] || 'config.xml'

const NAME = process.env['name'];
const ID = process.env['id'];

const ANDROID_VERSION_CODE = process.env['android_versionCode'];
const ANDROID_PACKAGE_NAME = process.env['android_packageName'];
const IOS_BUNDLE_VERSION = process.env['ios_CFBundleVersion'];
const IOS_BUNDLE_IDENTIFIER = process.env['ios_CFBundleIdentifier'];

// Load and parse the config.xml
const config = new Config(path.join(SOURCE_PATH, CONFIG_FILE_PATH));

if(NAME) {
  config.setName(NAME);
}

if(ID) {
  config.setID(ID);
}

if (ANDROID_VERSION_CODE) {
  config.setAndroidVersionCode(ANDROID_VERSION_CODE);
}

if (ANDROID_PACKAGE_NAME) {
  config.setAndroidPackageName(ANDROID_PACKAGE_NAME);
}

if (IOS_BUNDLE_VERSION) {
  config.setIOSBundleVersion(IOS_BUNDLE_VERSION);
}

if (IOS_BUNDLE_IDENTIFIER) {
  config.setIOSBundleIdentifier(IOS_BUNDLE_IDENTIFIER);
}

// Write the config file
config.writeSync();