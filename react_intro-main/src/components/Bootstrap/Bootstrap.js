import React from "react";

export default function Bootstrap() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 h-50 bg-primary text-light">Half-height box</div>
        <div class="col-md-6 h-100 bg-secondary text-light">
          Full-height box
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 w-25 bg-info text-light">25% width box</div>
        <div class="col-md-3 w-50 bg-warning text-dark">50% width box</div>
        <div class="col-md-3 w-75 bg-danger text-light">75% width box</div>
        <div class="col-md-3 mw-100 bg-success text-light">
          Max-width 100% box
        </div>
      </div>
    </div>
  );
}
