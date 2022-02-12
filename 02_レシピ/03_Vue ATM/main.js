Vue.createApp({
  data() {
    return {
      inputMoney: "",
      zandaka: 0,
      records: [{}],
    }
  },
  methods: {
    nyukin: function () {
      this.zandaka += Number(this.inputMoney)
      const now = new Date()
      this.records.push({ date: now, type: "入金", money: this.inputMoney })
    },
    syukkin: function () {
      this.zandaka -= Number(this.inputMoney)
      const now = new Date()
      console.log(now)
      this.records.push({ date: now, type: "出金", money: this.inputMoney })
    },
  },
  computed: {
    disabled: function () {
      if (this.zandaka < this.inputMoney) {
        return true
      }
    },
  },
}).mount("#app")
