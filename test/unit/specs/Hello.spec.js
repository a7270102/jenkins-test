import Vue from 'vue'
import Hello from '@/components/Hello'
import axios from 'axios';

Vue.prototype.$ajax = axios;

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  });

   // test for update method
  it('should hello inputValue correct', () => {
  		const Constructor = Vue.extend(Hello);
  		const vm = new Constructor().$mount();
  		vm.update("property");
  		expect(vm.$data.inputValue)
  		.to.equal("property");
  });

  // // test for async method; async is no problem
  // it("should hello dataList correct", done => {
  // 	const Constructor = Vue.extend(Hello);
  // 	const vm = new Constructor().$mount();
  // 	// 使用mock 去替换测试吧
  // 	vm.getData();
  // 	vm.$nextTick(() => {
  // 		expect(vm.$data.dataList.length)
  // 		.to.be.ok;
  // 		done();
  // 	})
  // });
})
