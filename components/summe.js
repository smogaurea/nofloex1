const noflo = require('noflo');
exports.getComponent = () => {
    const c = new noflo.Component();
    c.description = 'sum up two number';
    c.icon = 'file';
    c.inPorts.add('x',{
        datatype:'number'
    });
    c.inPorts.add('y',{
        datatype:'number'
    });
    c.outPorts.add('out', {
        datatype: 'string'
    });
    c.outPorts.add('error', {
        datatype: 'object'
    });

    c.process((input,output) => {
        //console.log(input.getData('x'),input.getData('y'));
        //[callback, data] = input.getData 'callback', 'in'
        if (!input.hasData('x', 'y')) {
            return;
          }
        let x=0;
        let y =0;
        [x,y] = input.getData('x','y');
        
        output.send({
            out:x + y
        })
        output.done();
    });
    return c;
}