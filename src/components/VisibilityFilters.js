import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import { Button, ButtonGroup, Card } from "react-bootstrap";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <Card>
      <div>
        {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
          const currentFilter = VISIBILITY_FILTERS[filterKey];
          return (
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
              <Button style={{margin:5}}
              key={`visibility-filter-${currentFilter}`}
              className={cx(
                "filter",
                currentFilter === activeFilter && "filter--active"
              )}
              onClick={() => {
                setFilter(currentFilter);
              }}>{currentFilter}</Button>
              
            </ButtonGroup>
          );
        })}
      </div>
    </Card>
    
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);