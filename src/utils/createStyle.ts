import { createElement, forwardRef, AllHTMLAttributes } from "react"

import classNames from "classnames"

type ElementType =
  | HTMLDivElement
  | HTMLAnchorElement
  | HTMLFormElement
  | HTMLButtonElement
  | HTMLDListElement
  | HTMLDataElement
  | HTMLElement

export type CustomTagArgs = {
  as?: keyof JSX.IntrinsicElements
  // TODO: Figure out how to cast the correct types based on defaultTag / as
} & AllHTMLAttributes<ElementType>

/**
 * Creates a re-usable element with pre-set classnames
 * Great for building generic, pure, Tailwind components
 */
export default function createStyle(
  defaultTag: keyof JSX.IntrinsicElements,
  classes = "",
  displayName: string | null = null
) {
  const customStyledTag = forwardRef<ElementType, CustomTagArgs>(
    ({ as, className = "", children, ...props }, ref) =>
      createElement(
        as || defaultTag,
        {
          className: classNames(classes, className),
          ref,
          ...props,
        },
        children
      )
  )

  customStyledTag.displayName = displayName || `*${defaultTag}`

  return customStyledTag
}
