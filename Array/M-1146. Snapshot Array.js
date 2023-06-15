var SnapshotArray = function (length) {
  this.snaps = [];
  this.curr = {};
  this.hasChanges = false;
};

SnapshotArray.prototype.set = function (idx, val) {
  this.curr[idx] = val;
  this.hasChanges = true;
};

SnapshotArray.prototype.snap = function () {
  if (this.hasChanges || this.snaps.length === 0) {
    this.snaps.push({ ...this.curr });
  } else {
    /**
     * if there is no change, we just push the ref of the lastest snapshot instead of
     * the whole copy of curr, which could prevent heap out of memory error
     **/
    this.snaps.push(this.snaps[this.snaps.length - 1]);
  }
  this.hasChanges = false;
  return this.snaps.length - 1;
};

SnapshotArray.prototype.get = function (idx, snap_id) {
  return this.snaps[snap_id][idx] ?? 0;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

const obj = new SnapshotArray(3);
obj.set(0, 1);
obj.set(1, 2);
obj.set(2, 100);
const s1 = obj.snap();
const s2 = obj.snap();

obj.snaps[0]['1'] = 300;
const s3 = obj.snap();
