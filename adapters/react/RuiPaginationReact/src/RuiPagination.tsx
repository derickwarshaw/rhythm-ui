/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import '@rhythm-ui/pagination';

import {IRuiPaginationProps} from './IRuiPagination';

export default class RuiPagination extends React.Component<IRuiPaginationProps> {
	private ruiPaginationEl = React.createRef<HTMLElement>();

	private _handleItemClick = (e: Event): void => {
		const customEvt = e as CustomEvent;
		const {onItemClick} = this.props;
		if (onItemClick) {
			onItemClick(customEvt.detail.pageNumber);
		}
	}

	private _handleNextClick = (): void => {
		const {onNextClick} = this.props;
		if (onNextClick) {
			onNextClick();
		}
	}

	private _handlePrevClick = (): void => {
		const {onPrevClick} = this.props;
		if (onPrevClick) {
			onPrevClick();
		}
	}


	public componentDidMount(): void {
		const {onItemClick, onPrevClick, onNextClick} = this.props;
		const el: HTMLElement | null = this.ruiPaginationEl.current;

		if (el) {
			if (onItemClick) {
				el.addEventListener('rui-pagination-item-click', this._handleItemClick);
			}

			if (onPrevClick) {
				el.addEventListener('rui-pagination-prev-click', this._handlePrevClick);
			}

			if (onNextClick) {
				el.addEventListener('rui-pagination-next-click', this._handleNextClick);
			}
		}
	}

	public componentWillUnmount(): void {
		const {onItemClick, onPrevClick, onNextClick} = this.props;
		const el: HTMLElement | null = this.ruiPaginationEl.current;

		if (el) {
			if (onItemClick) {
				el.removeEventListener('rui-pagination-item-click', this._handleItemClick);
			}

			if (onPrevClick) {
				el.removeEventListener('rui-pagination-prev-click', this._handlePrevClick);
			}

			if (onNextClick) {
				el.removeEventListener('rui-pagination-next-click', this._handleNextClick);
			}
		}
	}


	public render(): React.ReactNode {
		const {
			currentPage,
			pagesShown,
			numPages,
			items,
			nextLink,
			prevLink,
			...otherProps
		} = this.props;

		const props = otherProps;

		if (currentPage) { props['current-page'] = currentPage; }
		if (pagesShown) { props['pages-shown'] = pagesShown; }
		if (numPages) { props['num-pages'] = numPages; }
		if (nextLink) { props['next-link'] = nextLink; }
		if (prevLink) { props['prev-link'] = prevLink; }
		if (items) { props.items = JSON.stringify(items); }

		return (
			<rui-pagination ref={this.ruiPaginationEl} {...props}>
				{this.props.children}
			</rui-pagination >
		);
	}
}
