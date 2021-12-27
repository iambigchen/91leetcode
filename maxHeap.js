function maxHeap(A = []) {
  this.heapify(A);
}

maxHeap.prototype._shiftUp = function(i) {
  let parent_i = (i / 2) >>> 0;
  while (parent_i > 0) {
    if (this.h[i] > this.h[parent_i]) {
      [this.h[i], this.h[parent_i]] = [this.h[parent_i], this.h[i]];
    }
    i = parent_i
    parent_i = (parent_i / 2) >>> 0;
  }
};

maxHeap.prototype._shiftDown = function(i) {
  while (i * 2 <= this.h.length - 1) {
    const mc = this._maxChild(i);
    if (this.h[i] < this.h[mc]) {
      [this.h[i], this.h[mc]] = [this.h[mc], this.h[i]];
    }
    i = mc;
  }
};

maxHeap.prototype._maxChild = function(i) {
  if (i * 2 + 1 > this.h.length - 1) return i * 2;
  if (this.h[i * 2] > this.h[i * 2 + 1]) return i * 2;
  return i * 2 + 1;
};

maxHeap.prototype._minChild = function(i) {
  if (i * 2 + 1 > this.h.length - 1) return i * 2;
  if (this.h[i * 2] < this.h[i * 2 + 1]) return i * 2;
  return i * 2 + 1;
};

maxHeap.prototype.pop = function() {
  if (this.h.length === 1) throw new Error('空了就别弹了吧？');
  const ans = this.h[1];
  this.h[1] = this.h[this.h.length - 1];
  this.h.pop();
  this._shiftDown(1);
  return ans;
};

maxHeap.prototype.push = function(a) {
  this.h.push(a);
  this._shiftUp(this.h.length - 1);
};

maxHeap.prototype.heapify = function(A) {
  this.h = [0].concat(A);
  i = 1;
  while (i < this.h.length) {
    this._shiftDown(i);
    i++;
  }
};

// test:
h = new maxHeap([2,7,4,1,8,1]);
// h.push(1);
// h.push(5);
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());