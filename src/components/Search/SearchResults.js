import React from 'react'
import { Col } from 'reactstrap'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import Typography from '@material-ui/core/Typography'
import PaginateResultsSituation from '../PaginateResultsSituation'
import AnnounceCard from '../AnnounceCard'
import PaginateResults from '../PaginateResults'

const SearchResults = ({ results }) => {
    const { announces, total, page, size } = results

    return (
        <div className="container mt-4">
            {announces.length !== 0 ? (
                <div className="row" id="results">
                    {announces.map((announceRaw, index) => {
                        return(
                            <Col key={index} sm={12} md={12} lg={6} xl={6}>
                                <AnnounceCard
                                    announceRaw={announceRaw}
                                    featuredImgHeight={200}
                                />
                            </Col>
                        )
                    })}
                </div>
            ) : (
                <>
                    <div className="d-flex align-items-center my-3">
                        <FindInPageIcon fontSize="medium"/>
                        <Typography variant="h3">
                            {t('layout:no_result')}
                        </Typography>
                    </div>
                    <div className="text-center">
                        <CTALink
                            title={t('layout:news_feed')}
                            href="/advanced-search">
                        </CTALink>
                    </div>
                </>
            )}

            {announces.length !== 0 && (
                <>
                    <PaginateResultsSituation
                        count={announces?.length}
                        page={page}
                    />
                    <PaginateResults
                        total={total}
                        limit={size}
                        pageCount={10}
                        currentPage={page}
                    />
                </>
            )}
        </div>
    )
}

SearchResults.defaultProps = {
    results : {
        announces : []
    }
}

export default React.memo(SearchResults)
