<template>
  <div class="container my-5">
    <BaseButtonUp />
    <BaseCard
      width="700px"
      class="mb-5 pa-5"
    >
      <BaseExpansionPanel class="mb-5">
        <template #title>title</template>
        <template #content>content</template>
      </BaseExpansionPanel>
      <BaseDivider color="black" class="mb-5"/>

      <BaseGradientBlock class="mb-5">
        <BaseSpinner />
      </BaseGradientBlock>

      <BaseGradientBlock class="mb-5">
        <BaseTabs :tabs="tabs"/>
      </BaseGradientBlock>

      <BaseGradientBlock class="mb-5">
        <BaseTimer :timestamp="Date.now() + 10000000"/>
      </BaseGradientBlock>

      <BaseGradientBlock class="mb-5">
        <div class="row">
          <BaseIcon iconName="chevron-up.svg" :iconColor="{ color: 'red', hover: 'green'}" class="mr-5"/>
          <BaseIcon iconName="check-circle.svg" width="50px" height="50px" class="mr-5"/>
          <BaseIcon iconName="cross-inline-icon.svg" class="mr-5"/>
        </div>
      </BaseGradientBlock>

      <BaseGradientBlock class="mb-5">
        <div class="row">
          <div class="col pr-5">
            <BaseButton buttonColorClass="transparent" class="size16-weight700">button</BaseButton>
          </div>
          <div class="col pr-5">
            <BaseButton buttonColorClass="border" class="size16-weight700">button</BaseButton>
          </div>
          <div class="col pr-5">
            <BaseButton class="size16-weight700">button</BaseButton>
          </div>
        </div>
      </BaseGradientBlock>

      <BaseGradientBlock class="mb-5">
        <div class="row">
          <div class="col pr-5">
            <span>
              <BaseCheckbox v-model="checkbox" label="Test checkbox"/>
            </span>
          </div>
          <div class="col pr-5">
            <BaseInput v-model="input" label="Test input"/>
          </div>
          <div class="col pr-5">
            <BaseSelect v-model="select" :selectOptions="options" label="Test select"/>
          </div>
          <div class="col pr-5">
            <BaseTextarea v-model="textarea" label="Test textarea"/>
          </div>
          <div class="col pr-5">
            <DatepickerItem v-model="datepicker" withButton label="Test textarea"/>
            <DatepickerItem v-model="datepicker" label="Test textarea"/>
          </div>
        </div>
      </BaseGradientBlock>
      <BaseGradientBlock class="mb-5">
        <div class="row mb-5">
          <div class="col pr-5">
            <BaseButton class="size16-weight700" @click="openConfirmModal">
              Open confirm modal
            </BaseButton>
          </div>
          <div class="col pr-5">
            <BaseButton class="size16-weight700" @click="openSuccessModal">
              Open success modal
            </BaseButton>
          </div>
          <div class="col pr-5">
            <BaseButton class="size16-weight700" @click="openErrorModal">
              Open error modal
            </BaseButton>
          </div>
        </div>
        <div class="row">
          <div class="col pr-5">
            <BaseButton class="size16-weight700" @click="openPayStatusModal">
              Open pay status modal
            </BaseButton>
          </div>
          <div class="col pr-5">
            <BaseButton class="size16-weight700" @click="openDynamicModal">
              Open dynamic modal
            </BaseButton>
          </div>
          <div class="col pr-5">
            <BaseButton class="size16-weight700" @click="openMetamaskConnectModal">
              Open Metamask Connect modal
            </BaseButton>
          </div>
        </div>
      </BaseGradientBlock>
    </BaseCard>
    <!--      <BaseLoading />-->
    <IndexModal />
  </div>
</template>

<script>
import {computed, defineComponent} from "vue";
import {useModalStore} from "@/stores/modal";
import TestComponent from "@/components/ui/TestComponent.vue";

export default {
  name: "ComponentsPage",
  data() {
    return {
      tabs: [
        {
          id: 1,
          title: "Tab1",
          component: TestComponent,
          props: { id: 1, title: "Content1" },
        },
        {
          id: 2,
          title: "Tab2",
          component: TestComponent,
          props: { id: 2, title: "Content2" },
        },
      ],
      checkbox: true,
      input: '',
      select: '',
      textarea: '',
      datepicker: '',
      options: [
        {
          value: "option1",
          title: "Option1",
        },
        {
          value: "option2",
          title: "Option2",
        },
      ]
    }
  },
  setup() {
    const modalStore = useModalStore();

    async function showModal(payload) {
      await modalStore.showModal(payload);
    }

    async function hideModal() {
      await modalStore.hideModal();
    }

    async function setStartedStage(step) {
      await modalStore.setStartedStage(step);
    }

    async function setCompletedStage(step) {
      await modalStore.setCompletedStage(step);
    }

    return { showModal, hideModal, setStartedStage, setCompletedStage }
  },
  methods: {
    async openConfirmModal() {
      await this.showModal({
        type: "ConfirmationModal",
        options: {
          title: `Modal confirm test`,
          method: async () => {
            console.log('Success confirm')
            await this.showModal({
              type: "SuccessesModal",
              options: { title: "Successful open modal" },
            });
          },
        },
      });
    },
    async openSuccessModal() {
      await this.showModal({
        type: "SuccessesModal",
        options: { title: "Successful open modal" },
      });
    },
    async openErrorModal() {
      await this.showModal({
        type: "ErrorModal",
        options: { message: "Successful open modal" },
      });
    },
    async openPayStatusModal() {
      await this.showModal({
        type: "BasePayStatusDialog",
        options: {
          title: 'In progress',
          steps: 2
        },
      });

      setTimeout(() => {
        this.setStartedStage(2);
        this.setCompletedStage(1);

        setTimeout(() => {
          this.setStartedStage(2);
          this.setCompletedStage(2);
          setTimeout(() => {
            this.setDefaultDialog()
          }, 1000)
        }, 1000)
      }, 1000)
    },
    async setDefaultDialog() {
      await this.hideModal();
      await this.setStartedStage(1);
      await this.setCompletedStage(0);
    },
    async openDynamicModal() {
      await this.showModal({
        type: "DynamicModal",
        options: {
          component: TestComponent,
          props: {
            title: 'Successful open modal',
          },
        },
      });
    },
    async openMetamaskConnectModal() {
      await this.showModal({
        type: "MetamaskConnectModal",
      });
    },
  }
}
</script>

<style scoped>

</style>
