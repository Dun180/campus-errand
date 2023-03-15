// pages/order/expressAgent/expressAgent.ts
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sizeList: [
      {
        name: '小件 ¥ 2.5',
        tips: '小件：手机巴掌大小的快件，价格2.5元'
      },
      {
        name: '中件 ¥ 3',
        tips: '中件：鞋盒大小的快件，价格3元'

      },
      {
        name: '大件 ¥ 4.5',
        tips: '大件：重量超过5公斤的快件，价格4.5元'
      }
    ],
    size: 0,
    checked: false,
  },
  selectSize(event: any) {
    const id = event.currentTarget.dataset.id
    this.setData({
      size: id
    })
    Toast(this.data.sizeList[id].tips);
    console.log(this.data.sizeList[id].tips)
  },

  onChange({ detail }: any) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})