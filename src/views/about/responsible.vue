<template>
    <div>
        <div class="col-md-12">
            <div>
                <h4 class="u-title">
                    健康博彩
                </h4>
                <div class="scrollbar-wrap user-scroll">
                    <div class="m-introduce m-scrollbar">
                        <div class="scrollbar">
                            <div class="m-keep">
                                <p>我们希望我们的用户在Mr. Cat享受到乐趣，因此我们鼓励负责任博彩。我们允许玩家制定自己的负责任博彩限制 ，然后我们会通过管理工具帮助设立和控制这些自定义限制。</p>
                                <p>博彩是娱乐的一种形式，同时不应该给您财务和感情生活带来负担。借钱来玩，花费超出预算或挪用其他用途的金钱不仅是不明智的，而且会您和您身边的人带来严重的问题。我们希望您在Mr. Cat享受到乐趣，因此请负责任地投注并玩得开心！ </p>
                                <p>寻求协助：</p>
                                <p>有很多机构可以为在博彩中产生问题的人提供支持和帮助，我们推荐这些玩家联络这些自助组织获得额外的帮助。</p>
                                <p>以下网站提供建议和指引。每个组织都有帮助热线和电子邮件地址，如果您需要严格保密的建议和帮助，您可以联络他们。</p>
                                <p>www.gamblersanonymous.org<br> www.gamcare.org.uk<br> www.gamblingtherapy.org</p>
                                <p>您是否有博彩方面的问题？</p>
                                <p>如果您感到您可能会有博彩方面的问题，请问一下您自己一下问题：<br> 1.有无人曾经批评过您进行赌博？<br> 2.您是否曾经因为试图掩饰您在赌博方面花费的时间和金钱而撒谎？<br> 3.争吵、挫折感和失望令您想进行赌博？<br> 4.您是否独自一人长时间赌博？<br> 5.您是否远离工作、同事或学校进行赌博？<br> 6.您是否通过赌博来逃避烦闷或不快的生活？<br> 7.您是否很不情愿将赌博用的钱使用在其他地方？<br> 8.您是否因为赌博而对家庭、朋友和其他消遣失去兴趣？<br> 9.输钱之后，您是否感觉您必须再次尝试并尽可能赢回您输掉的钱？<br> 10.当您赌博并输掉所有钱之后，您会否感到失落和绝望，并需要尽可能再赌一次？<br> 11.您会赌到输掉最后一分钱吗？<br> 12.您是否曾经撒谎，偷窃或借钱来取得资金进行赌博或还赌债？<br> 13.您是否因为赌博感觉沮丧甚至想自杀？</p>
                                <p>您回答“是的”越多，越表明您可能有严重的博彩问题，并可能需要寻求以上列出的渠道的帮助和建议。</p>
                                <p>管理您的博彩方法</p>
                                <p>对于经常享受博彩乐趣的玩家来说，有时花费超过预算并不罕见。我们建议您制定特定的预算计划以确保您的博彩花费是可以负担的。</p>
                                <p>有时人们会否认有问题，并只有在受到批评时才寻求帮助。坦率地问您自己， 并且您是否认为您能够在遇到博彩问题是为自己设立一个目标，例如两周或一个月，停止博彩作为试验。如果您不能做到这点，您可能真的有问题，您可能需要与您的顾问讨论一下您的处境。</p>
                                <p>自我排除</p>
                                <p>如果您相信您有博彩问题或强制性地停止赌博，Mr. Cat让您可以永久地将您自我排除在Mr. Cat 之外。如果您选择永久自我排除，您将会被禁止在Mr. Cat玩。您只需要联络客服团队就可以了。</p>
                                <p>如果您希望阻止您访问互联网软件上不同的博彩、投注或赌博设施， 您可以访问Gamblock™ http://www.gamblock.com， 它会帮助您拦截互联网的博彩网站。这会帮助有问题的博彩玩家避免危险或不受约束的赌博行为。</p>
                                <p>防止未成年人博彩</p>
                                <p>您必须年满18岁才能在Mr. Cat玩。我们会进行检查以确保没有未成年人访问我们的博彩网站。提供不准确或不诚实的玩家年龄资料将会导致没收赢利的后果甚至法律诉讼的后果。</p>
                                <p>父母监控</p>
                                <p>为防止未成年人访问博彩网站，我们推荐负责任的玩家在电脑上安装互联网过滤软件。有很多第三方的应用程序可以让父母或监护人用于监控或禁止他们的电脑访问互联网。这些包括：<br> Net Nanny过滤软件保护儿童远离不合适的网站内容： www.netnanny.com<br> CYBER Sitter过滤软件可以让父母添加他们要阻止的网站： www.cybersitter.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { MemberModule } from '@/store/modules/member'
    import { _doSubmit, _doGet } from '@/api/common'

    @Component({
        components: {}
    })
    export default class Responsible extends Vue {
        private loading: boolean = false
        private order: any = null
        private setting: any
        private postForm: any = {
            payment_id: 1,
            payment_type_id: 1,
            bank_id: 1,
            amount: ''
        }

        get member() {
            return MemberModule.member
        }

        private created() {
            this.fetchData()
        }

        private mounted() {
            this.flushPage()
        }

        private fetchData() {
            let self = this
            this.loading = false
            _doGet('/member/deposit', []).then(response => {
                self.order = response.data.order
            }).catch(() => {
                this.loading = false
            })
        }

        /**
         * 切换支付方式
         * @param p_payWay 支付方式代码
         */
        private handlePayWay(p_payWay: number) {
            this.postForm.payment_type_id = p_payWay
        }

        /**
         * 重载页面的一些信息
         */
        private flushPage() {
            MemberModule.getInfo()
        }

        /**
         * 获取支付链接，此时会新窗口打开
         */
        private getPayUrl() {
            let self = this
            this.loading = false
            if (this.postForm.amount <= 0 || this.postForm.amount === '') {
                this.$toasted.show('请填写存款金额', {
                    type: 'error'
                })
                return
            }
            _doSubmit('/member/deposit', this.postForm).then(response => {
                self.loading = false
                if ((response as any).code === 0) {
                    this.$toasted.show((response as any).msg, {
                        type: 'error'
                    })
                } else {
                    window.open((response as any).data)
                }
            }).catch(() => {
                this.loading = false
            })
        }
    }
</script>
