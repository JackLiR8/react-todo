import { type ValuesOf } from 'src/types/utils'

export const TODO_CATEGORY = {
  all: 'all',
  active: 'active',
  completed: 'completed',
} as const
export type TodoCategory = ValuesOf<typeof TODO_CATEGORY>

type StatusBarProps<T> = {
  dataSource: T[]
  onCategoryChange: (category: TodoCategory) => void

}
export default function StatusBar<T extends { completed: boolean }>(params: StatusBarProps<T>) {
  const { dataSource, onCategoryChange } = params

  const getCategoryCount = (filter: (item: T) => boolean) => {
    return dataSource.filter(filter).length
  }

  const handleCategoryClick = (category: TodoCategory) => {
    onCategoryChange(category)
  }

  return <div className='status-bar' data-testid="status-bar">
    <div
      className='status-bar__item'
      onClick={() => handleCategoryClick(TODO_CATEGORY.all)}>
      Total: {dataSource.length}
    </div>
    <div
      className='status-bar__item'
      onClick={() => handleCategoryClick(TODO_CATEGORY.active)}>
      Active: {getCategoryCount(item => !item.completed)}
    </div>
    <div
      className='status-bar__item'
      onClick={() => handleCategoryClick(TODO_CATEGORY.completed)}>
      Completed: {getCategoryCount(item => item.completed)}
    </div>
  </div>
}
