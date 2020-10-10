// import Vue from 'vue'
// import NsPage from '~/components/layout/NsPage.vue'
// import NsSection from '~/components/layout/NsSection.vue'
// import NsForm from '~/components/layout/NsForm.vue'
// import NsPanel from '~/components/layout/NsPanel.vue'
// import NsCard from '~/components/layout/NsCard.vue'
// import NsColumn from '~/components/layout/NsColumn.vue'
// import NsTile from '~/components/layout/NsTile.vue'
// import NsWindow from '~/components/layout/NsWindow.vue'

// // components/pages
// import PageHeader from '~/components/pages/PageHeader.vue'
// import PageLayout from '~/components/pages/PageLayout.vue'

// // components/ui
// import CError from '~/components/ui/CError.vue'
// import CMessage from '~/components/ui/CMessage.vue'
// import CLabel from '~/components/ui/CLabel.vue'
// import CLabeledItem from '~/components/ui/CLabeledItem.vue'
// import CButton from '~/components/ui/CButton.vue'
// import CTextInput from '~/components/ui/CTextInput.vue'
// import CDatePicker from '~/components/ui/CDatePicker.vue'
// import CCalendar from '~/components/ui/CCalendar.vue'
// import CDropdown from '~/components/ui/CDropdown.vue'
// import CDropdownIndex from '~/components/ui/CDropdownIndex.vue'
// import CSelectList from '~/components/ui/CSelectList.vue'
// import CTreeSelect from '~/components/ui/CTreeSelect.vue'
// import CYearMonthSelect from '~/components/ui/CYearMonthSelect.vue'
// import CGroupSelect from '~/components/ui/CGroupSelect.vue'
// import CFileUpload from '~/components/ui/CFileUpload.vue'
// import CFileSelector from '~/components/ui/CFileSelector.vue'
// import CCheckbox from '~/components/ui/CCheckbox.vue'
// import CCheckboxList from '~/components/ui/CCheckboxList.vue'
// import CRadioButton from '~/components/ui/CRadioButton.vue'
// import CToolTips from '~/components/ui/CToolTips.vue'
// import CTab from '~/components/ui/CTab.vue'
// import CTable from '~/components/ui/CTable.vue'
// import CModal from '~/components/ui/CModal.vue'
// import CToggleButton from '~/components/ui/CToggleButton.vue'
// import CPagerDate from '~/components/ui/CPagerDate.vue'
// import CTree from '~/components/ui/CCheckboxTree.vue'
// import CTreeView from '~/components/ui/CTreeView.vue'
// import CContenteditableInput from '~/components/ui/CContenteditableInput.vue'
// import CVCalendar from '~/components/ui/CVCalendar.vue'
// import CAccordion from '~/components/ui/CAccordion.vue'
// import CContextMenu from '~/components/ui/CContextMenu.vue'
// import CConfirmModal from '~/components/ui/CConfirmModal.vue'

// import COrderReservation from '~/components/order/reservation/COrderReservation.vue'

// import NFormTemplate from '~/components/formTemplate/NFormTemplate.vue'
// // template bodies
// import NPfSignBody from '~/components/formTemplate/NTemplateBody/NPFSignBody.vue'
// import NJkomBody from '~/components/formTemplate/NTemplateBody/NJkomBody.vue'
// import NShoulderJoaBody from '~/components/formTemplate/NTemplateBody/NShoulderJoaBody.vue'
// import NMeniscusJoaBody from '~/components/formTemplate/NTemplateBody/NMeniscusJoaBody.vue'
// import NRoweScoreBody from '~/components/formTemplate/NTemplateBody/NRoweScoreBody.vue'
// import NJssSportsBody from '~/components/formTemplate/NTemplateBody/NJssSportsBody.vue'
// import NJssUnstableBody from '~/components/formTemplate/NTemplateBody/NJssUnstableBody.vue'
// import NConstantScoreBody from '~/components/formTemplate/NTemplateBody/NConstantScoreBody.vue'
// import NLysholmKneeScoreBody from '~/components/formTemplate/NTemplateBody/NLysholmKneeScoreBody.vue'
// import NKujalaScoreBody from '~/components/formTemplate/NTemplateBody/NKujalaScoreBody.vue'
// import NKneeNrsBody from '~/components/formTemplate/NTemplateBody/NKneeNrsBody.vue'
// import NEquipmentInstructionBody from '~/components/formTemplate/NTemplateBody/NEquipmentInstructionBody.vue'
// import NUclaScoreBody from '~/components/formTemplate/NTemplateBody/NUclaScoreBody.vue'
// import NTmduBody from '~/components/formTemplate/NTemplateBody/NTmduBody.vue'
// import NAnalDiseaseBody from '~/components/formTemplate/NTemplateBody/NAnalDiseaseBody.vue'
// import NKneeFunctionEvalBaseBody from '~/components/formTemplate/NTemplateBody/NKneeFunctionEvalBaseBody.vue'

// // オーダマッピング用コンポーネント 循環呼び出し用
// import OrderContentItemObject from '~/components/pages/patient/_uuid/order/contentItem/OrderContentItemObject.vue'
// import OrderContentItemArray from '~/components/pages/patient/_uuid/order/contentItem/OrderContentItemArray.vue'

// Vue.mixin({
//     components: {
//         // layout
//         NsPage,
//         NsSection,
//         NsForm,
//         NsPanel,
//         NsCard,
//         NsColumn,
//         NsTile,
//         NsWindow,
//         // pages
//         PageHeader,
//         PageLayout,
//         // ui
//         CError,
//         CMessage,
//         CLabel,
//         CLabeledItem,
//         CButton,
//         CTextInput,
//         CDatePicker,
//         CCalendar,
//         CDropdown,
//         CDropdownIndex,
//         CSelectList,
//         CTreeSelect,
//         CYearMonthSelect,
//         CGroupSelect,
//         CFileUpload,
//         CFileSelector,
//         CCheckbox,
//         CCheckboxList,
//         CToolTips,
//         CTable,
//         CTab,
//         CRadioButton,
//         CModal,
//         COrderReservation,
//         CToggleButton,
//         CPagerDate,
//         CTree,
//         CTreeView,
//         CContenteditableInput,
//         CVCalendar,
//         CAccordion,
//         CContextMenu,
//         CConfirmModal,
//         NFormTemplate,

//         // templates
//         NPfSignBody,
//         NJkomBody,
//         NShoulderJoaBody,
//         NMeniscusJoaBody,
//         NRoweScoreBody,
//         NJssSportsBody,
//         NJssUnstableBody,
//         NConstantScoreBody,
//         NLysholmKneeScoreBody,
//         NKujalaScoreBody,
//         NUclaScoreBody,
//         NKneeNrsBody,
//         NTmduBody,
//         NEquipmentInstructionBody,
//         NAnalDiseaseBody,
//         NKneeFunctionEvalBaseBody,
//         // オーダマッピング用コンポーネント 循環呼び出し用
//         OrderContentItemObject,
//         OrderContentItemArray,
//     },
// })
