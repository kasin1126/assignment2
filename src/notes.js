describe('notes module', function() {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
        
        describe('adding a note', function() {
		
        it('should be able to add a new note', function () {
    		// tests go here
        });
	
        it('should ignore blank notes', function () {
    		// tests go here
        });
	
        it('should ignore notes containing only whitespace');
        it('should require a string parameter');
    });
	
    describe('deleting a note', function() {
        it('should be able to delete the first index');
        it('should be able to delete the last index');
        it('should return false if index is out of range');
        it('should return false if the parameter is missing');
    });	

    });
it('should be able to add a new note', function () {
   expect(notes.add('sixth note')).toBe(true);
   expect(notes.count()).toBe(6);
});

var notes = (function(){
    var list = [];
    
    return {
        add: function(note) {
            if(note){
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {},
        count: function() {
            return list.length;
        },
        list: function() {},
        find: function(str) {},
        clear:function(){
            list.splice(0, list.length);
        }
    }
}());

it('should ignore blank notes', function () {
   expect(notes.add('')).toBe(false);
   expect(notes.count()).toBe(5);
});

    it('should ignore notes containing only whitespace', function() {
    expect(notes.add('   ')).toBe(false);
    expect(notes.count()).toBe(5);
    pending();
});

it('should require a string parameter', function() {
    expect(notes.add()).toBe(false);
    expect(notes.count()).toBe(5);
    pending();
});

});
