//              THE BATTLEFIELD GRID
// ['top left',    'top middle',    'top right',
//  'middle left', 'center',        'middle right',
//  'bottom left', 'bottom middle', 'bottom right']
//

function fire(x, y) {
  let arr = [
    ["top left", "top middle", "top right"],
    ["middle left", "center", "middle right"],
    ["bottom left", "bottom middle", "bottom right"],
  ];
  return arr[y][x];
}
