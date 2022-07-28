import { ComponentStory, ComponentMeta } from '@storybook/react'
import InsImage from './InsImage'

export default {
  title: 'Atoms/InsImage',
  component: InsImage,
} as ComponentMeta<typeof InsImage>

const Template: ComponentStory<typeof InsImage> = args => <InsImage {...args} />

export const base = Template.bind({})
base.args = {
  src: 'https://v1.tailwindcss.com/img/card-top.jpg',
  alt: 'Hello World',
  width: '600px',
}
