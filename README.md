# element-data-store

element-data-store is a simple library that provides an api to stores data for an element (similar to $.data in jQuery)

## Add element-data-store to your project

There are multiple ways to add element-data-store to your project. 

* Download from GitHub 
* Install using npm `npm install element-data-store`

## Usage

### Add data to an element

To add data to an element use the `set` method, passing the element, a key and the value you want to store.

elementDataStore.set(element, key, value);

### Fetch data for an element

To get data to an element use the `get` method, passing the element. The key is an optional parameter, passing it will get the value for the key, not passing the parameter will result in being returned all the data stored on the element.

elementDataStore.get(element, [key]);

### Remove data from an element

To remove data from an element use the `remove` method, passing the element. The key is an optional parameter, passing it will remove the value for the key, not passing the parameter will result in the removal of all data stored for the element.

elementDataStore.remove('element', [key])

## Licence

License: MIT (http://www.opensource.org/licenses/mit-license.php)
Copyright Jonathan Fielding 2015