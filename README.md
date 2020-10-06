# pQuery
Javascript object proxy chain

This small function create a proxy chain where each nested property access is stored in an Array.
Then the trigger name is used to actually do something with this Array of names.

When instancing a pQuery you provide a trigger name (default is "go") to execute the final action provided by the exec function:

```javascript
new pQuery({ trigger: 'go', exec() { console.log(this) })
```

## Simple exemples

```javascript
let doc = new pQuery({
	exec()
	{
		return this.reduce( (p,s)=> p.querySelector(s), document) 
	}
})

let theSpan = doc.div.span.go

let myInfoPanel = doc['div.Panel#info'].go
```

```javascript
fs = new pQuery({
	path()
	{
		return this.join('/') 
	}
})

fs.folder.where.is.the.file.path // folder/where/is/the/file
```

## Complex exemple

TODO: this a goal to acheive

```javascript
db = new pQuery({???})

db.name // indexedDB.open( 'name' )
db.name.store = { ... } // .createObjectStore( 'store', { ... } ) //TODO: see for async proxy.set
db.name.store // .objectStore( 'store' )
db.name.store = [ ... ] // [...].map( item=> store.add( item ) //TODO: see for async proxy.set
db.name.store.idxName // .index( 'idxName' )
db.name.store[id] // .get( id )
db.name.store[id] = { ... } // .put( id, {} ) //TODO: see for async proxy.set
db.name.store.map() // .openCursor()

let myDB = db.name
myDB.store...

let store = db.name.store
store...

```

