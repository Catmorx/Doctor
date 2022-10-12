package com.doctors.model.reports;

import com.doctors.model.ClientModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReportClient {

    private Long total;
    private ClientModel client;
}
