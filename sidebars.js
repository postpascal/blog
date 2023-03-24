/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  meachineLearning:[
    'machineLearning/dbscan',
    'machineLearning/mle',
    'machineLearning/pca',
    'machineLearning/products',
    'machineLearning/kmeans',
    'machineLearning/DistributedTensorflow',
    'machineLearning/MachineLearningTips'
  ]
  ,
  reading: [
    'reading/intellegentTime',
    'reading/richdad',
    'reading/whysmallteamswin',
    'reading/dfscx',
    'reading/principles',
    'reading/blackswan',
    'reading/randomfools',
    'reading/formepastnow',
    'reading/waytowealthfree',
    'reading/artofthinking',
  ]
  ,
  invest: [
    'invest/investMethodology',
    {
      label: '2023年',
      type: 'category',
      collapsed: true,
      items: [
        'invest/investMethodology'
      ],
    },
  ]
}

module.exports = sidebars
