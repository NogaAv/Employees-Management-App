package com.bluetech.MyEmployeesApi.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
//@Getter
//@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Employee_Id")
    private @Getter Long Id;
    @Column(name = "Full_Name")
    private @Getter @Setter String name;
    @Column(name = "Company")
    private @Getter @Setter String company;
    @Column(name = "Email")
    private @Getter @Setter String email;

}
