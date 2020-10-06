
var pQuery = class pQuery {
	constructor( config )
	{
		let { trigger = 'go', get = (o,p)=> o.push(p), exec } = config
		return new Proxy( {}, {
			get:(o1,p1)=> {
				let stack = []
				get( stack, p1 )
				let prox = new Proxy( stack, { 
					get: (o,p)=> {
						if( p in config ) return config[p].call(stack)
						if( p == trigger ) return exec.call(stack)
						else get( stack, p )
						return prox
					}
				})
				return prox 
			},
			set:(o,p,v)=> {
				
			},
			apply:(o,p,a)=>{console.log('call',o,p,a)}
		})
	}
}
