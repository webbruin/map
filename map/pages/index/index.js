Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [
      {
        id: 1,
        latitude: 23.099994,
        longitude: 113.324520,
        title: 'T.I.T 创意园'
      },
      {
        id: 2,
        latitude: 23.099994,
        longitude: 113.344520,
        title: 'T.I.T 创意园',
        iconPath: '/image/location.png'
      },
      {
        id: 3,
        latitude: 23.099994,
        longitude: 113.304520,
        title: 'T.I.T 创意园',
        iconPath: '/image/location.png'
      }
    ]
  },
  onLoad: function () {
    wx.authorize({
      scope: 'scope.userLocation',
      success: () => {
        wx.getLocation({
          type: 'gcj02',
          success: res => {
            console.log(res)
            this.setData({
              latitude: res.latitude,
              longitude: res.longitude
            })
            wx.chooseLocation()
          },
          fail: err => {
            wx.showToast({
              title: err,
              icon: 'none'
            })
          }
        })
      }
    })
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  }
})
