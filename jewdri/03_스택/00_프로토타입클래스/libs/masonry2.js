function masonry(){
    this.listItem = null;
    this.colGrid = null;
    this.listWidth = null;
    this.itemMargin = null;
    this.layoutStack = null;
}

masonry.prototype.init = function(item,col,w,m){
    this.listItem = $(item);
    this.colGrid = col;
    this.listWidth = w;
    this.itemMargin= m;
    this.layoutStack = new Array(col);
    this.showMasonry();

}
masonry.prototype.showMasonry = function(){
    var max = this.listItem.length;
    var pos = new Array();

    //레이아웃에 맞쳐서 스택형성
    for(var k=0; k < this.colGrid ; k++){
        this.layoutStack[k] = new stack();
    }

    for(var i = 0; i < max; i++){
        console.log(i);
        var temp = {x:null, y:null};
        var layoutTemp = {x:null, y:null,idx:i};
        var col = null;

        if(i >= this.colGrid){
            //alert(this.colGrid);
            var compareIdx = new Array();

            //레이아웃들 스택의 마지막 데이터들을 가져옴
            for(j = 0; j < this.colGrid; j++){
                compareIdx[j] = this.layoutStack[j].peek();
                compareIdx[j].col = j;
            }
            //가져온 끝에있는 인덱스들의 y값 높이를 비교하여, 가장 작은 y를 찾아 현재 높이와 x셋팅
            compareIdx.sort(this.compareTop);
            console.log(compareIdx[0]);
            temp.x = compareIdx[0].x;
            temp.y = compareIdx[0].y + this.itemMargin;
            a = compareIdx[0].col;

        }else{
             var itemHeight = 0;
             //좌측컨텐츠와 여백
            if(i % this.colGrid == 0){
                 temp.x = (( i % this.colGrid)*this.listWidth);
            }else{
                 temp.x = this.itemMargin + (( i % this.colGrid)*this.listWidth);
            }
            temp.y = itemHeight;
            var a = i % this.colGrid;
        }

        pos[i] = temp;
        layoutTemp.x = temp.x;
        layoutTemp.y += temp.y + parseInt(this.listItem.eq(i).css('height'));
        layoutTemp.idx = i;
        this.layoutStack[a].push(layoutTemp);
    }
    this.moveItems(pos);

    //console.log(this.layoutStack);
}

masonry.prototype.moveItems = function(pos){
    var max = this.listItem.length;
    for(var i = 0; i < max; i++){
        var list = this.listItem.eq(i);
        list.css({left:pos[i].x, top:pos[i].y});
    }
    var contWidth = (this.listWidth*this.colGrid)+(this.itemMargin*(this.colGrid-1));
    this.listItem.parent().css('width',contWidth+'px');
}

masonry.prototype.compareTop = function(a,b){
    if(a.y < b.y){
        return -1;
    }
    if(a.y > b.y){
        return 1;
    }
    return 0;
}
