<template>
  <div class="sort">
      <div class="tab" ref="tabs">
          <mt-navbar v-model="selected">
            <mt-tab-item  v-for="(tab,index) in tabList" :key="index"  :id="tab.id" @click="changeActive(tab.id)">{{tab.content}}</mt-tab-item>
          </mt-navbar>
      </div>
      <div class="content" ref="contents">
        <scroller>
        <mt-tab-container v-model="selected" >
          <mt-tab-container-item id="01">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./06.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="02">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                  <a href="" class="db">
                    <div class="rela">
                      <img class="image" src="./brand01.jpg">
                    </div>
                    <p>天恒宝山</p>
                  </a>
                </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="03">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="04">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="05">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./06.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="06">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="07">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="08">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="09">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./06.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="10">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="11">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="12">
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item01">
              <div class="show">
                <a href="">热门分类</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./03.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./04.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./02.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./01.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./05.jpg">
                      </div>
                      <p>磨牙洁齿</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02">
              <div class="show">
                <a href="">热门品牌</a>
                <ul>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand01.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                  <li class="fl mt10">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" src="./brand02.jpg">
                      </div>
                      <p>天恒宝山</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
        </scroller>

      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
        tabList:[
          {id:'01',title:'内容',content:'为您推荐'},
          {id:'02',title:'测试',content:'狗狗主粮'},
          {id:'03',title:'测试',content:'狗狗坐垫'},
          {id:'04',title:'选项',content:'狗狗服饰'},
          {id:'05',title:'测试',content:'狗狗生活'},
          {id:'06',title:'选项',content:'狗狗玩具'},
          {id:'07',title:'测试',content:'狗狗玩具'},
          {id:'08',title:'选项',content:'狗狗保健'},
          {id:'09',title:'内容',content:'狗狗医疗'},
          {id:'10',title:'测试',content:'狗狗牵引'},
          {id:'11',title:'选项',content:'狗狗美容'},
          {id:'12',title:'测试',content:'狗狗周边'},
          {id:'13',title:'选项',content:'狗狗服饰'},
          {id:'14',title:'选项',content:'狗狗服饰'},
          {id:'15',title:'测试',content:'狗狗主粮'},
          {id:'16',title:'选项',content:'狗狗服饰'},
          {id:'17',title:'测试',content:'狗狗主粮'},
          {id:'18',title:'选项',content:'狗狗服饰'},
          {id:'19',title:'内容',content:'为你推荐'},
          {id:'20',title:'测试',content:'狗狗主粮'},
          {id:'21',title:'选项',content:'狗狗服饰'},
          {id:'22',title:'测试',content:'狗狗主粮'},
        ],
        selected:'01'
      }
    },
    methods:{
      changeActive(id){
        this.selected = id;
      },
      _initScroll(){
       var tabscroll = new BScroll(this.$refs.tabs,{
          click:true
        })
//        var contentscroll = new BScroll(this.$refs.contents,{
//          click:true
//        })


      }
    },
    mounted(){
      this.$nextTick(()=>{
        this._initScroll()
      })

    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
.sort
  width 100%
  height 600px
  overflow hidden
  .tab
    height 100%
    width 70px
    float left
    position relative
    z-index 10
    .mint-navbar
      width 70px
      /*height 700px*/
      display flex
      flex-direction: column
      float left
      box-sizing border-box
      border-right: 1px solid #cbcbcb;
      .mint-tab-item
        display block
        width: 70px
        height  50px
        text-align center
        padding 0
        .mint-tab-item-label
          font-size 13px
          text-align center
          line-height 30px
          height 30px
          padding-top: 10px

  .content
    width 303px
    height 100%
    box-sizing border-box
    border-top: 1px solid #f3f5f7;
    float right
    position relative
    .mint-tab-container
      position relative
      width 100%
      .mint-tab-container-wrap
        width 100%
        .item01
          padding: 15px 5px 20px;
          height: 300px
          box-sizing border-box
          .show
            font-size: 12px;
            line-height 20px
            &>a
              display block
              padding-left 5px
              margin-top 10px
              font-size: 12px;
              line-height 20px
              color: #999;
            &>ul
              width 100%
              float left
              &>li
                box-sizing border-box
                width: 33.33%;
                padding: 0 5px;
                margin-top: 10px;
                float left
                &>a
                  display block
                  &>div
                    width 1
                    &>img
                      width 100%
                  &>p
                    text-align center
        .item02
          padding: 15px 5px 20px;
          /*height: 300px*/
          /*display inline-block*/
          float left
          box-sizing border-box
          .show
            font-size: 12px;
            line-height 20px
            &>a
              display block
              padding-left 5px
              margin-top 10px
              font-size: 12px;
              line-height 20px
              color: #999;
            &>ul
              width 100%
              float left
              &>li
                box-sizing border-box
                width: 50%;
                padding: 0 5px;
                margin-top: 10px;
                float left
                &>a
                  display block
                  &>div
                    width 135 px
                    height 66px
                    border: 1px solid #f3f4f5;
                    text-align: center;
                    padding: 5px 10px;
                    box-sizing border-box
                    &>img
                      width 100%
                  &>p
                    text-align center




</style>
