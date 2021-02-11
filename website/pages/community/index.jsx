import VerticalTextBlockList from '@hashicorp/react-vertical-text-block-list'
import SectionHeader from '@hashicorp/react-section-header'
import Head from 'next/head'
import HashiHead from '@hashicorp/react-head'

function CommunityPage() {
  return (
    <div id="community">
      <HashiHead is={Head} title="Community | Vault by HashiCorp" />
      <SectionHeader
        headline="Community"
        description="Vault is an open source project with a growing community. There are active, dedicated users willing to help you through various mediums."
        use_h1={true}
      />
      <VerticalTextBlockList
        data={[
          {
            header: 'Discussion List',
            body:
              '<a href="https://discuss.hashicorp.com/c/vault">Vault Community Forum</a>',
          },
          {
            header: 'Bug Tracker',
            body:
              '<a href="https://github.com/hashicorp/vault/issues">Issue tracker on GitHub</a> for reporting bugs. Use IRC or the mailing list for general help.',
          },
          {
            header: 'Training',
            body:
              '<a href="https://www.hashicorp.com/training">Paid HashiCorp</a> training courses are available in a city near you. Private training courses are also available.',
          },
          {
            header: 'Certification',
            body:
              'Learn more about our <a href="https://www.hashicorp.com/certification/">Cloud Engineer Certification program</a> and <a href="https://www.hashicorp.com/certification/vault-associate/">HashiCorp&apos;s Security Automation Certification</a> exams.',
          },
        ]}
      />
    </div>
  )
}

export default CommunityPage
