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
fs = new pQuery({path(){ return this.join('/') }})
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


