package com.sp.rest;

import java.util.ArrayList;
import java.util.LinkedList;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sp.model.Facility;
import com.sp.model.Vehicle;
import com.sp.service.FireForceService;

@RestController
public class FireForceRestCrt {
    @Autowired
    FireForceService fService;
    
    @RequestMapping(method=RequestMethod.POST,value="/addVehicle")
    public void addVehicle(@RequestBody Vehicle vehicle) {
        fService.addVehicle(vehicle);
    }
    
    @RequestMapping(method=RequestMethod.PUT,value="/updateVehicle/{id}")
    public void updateVehicle(@RequestBody Vehicle vehicle,@PathVariable String id) {
        fService.updateVehicle(vehicle,id);
    }
    
    @RequestMapping(method=RequestMethod.GET,value="/getVehicle/{id}")
    public String getVehicle(@PathVariable String id) {
    	String vehicle = new String();
        vehicle=fService.getVehicle(id);
        return(vehicle);
    }
    
    @RequestMapping(method=RequestMethod.GET,value="/getAllVehicle/")
    public String getAllVehicle() {
    	String vehicle = new String();
        vehicle=fService.getAllVehicle();
        return(vehicle);
    }
    
    @RequestMapping(method=RequestMethod.GET,value="/getFacility/{id}")
    public String getFacility(@PathVariable String id) {
    	String facility = new String();
        facility=fService.getFacility(id);
        return(facility);
    }
    
    @RequestMapping(method=RequestMethod.GET,value="/getAllFacilities")
    public String getFacility() {
    	String facility = new String();
        facility=fService.getAllFacilities();
        return(facility);
    }
    
    @RequestMapping(method=RequestMethod.POST,value="/addFacility")
    public void addFacility(@RequestBody Facility facility) {
        fService.addFacility(facility);
    }
    
    @RequestMapping(method=RequestMethod.GET,value="/getAllFire")
    public String getAllFire() {
    	String fire = new String();
        fire=fService.getAllFire();
        return(fire);
    }
    
    @RequestMapping(method=RequestMethod.GET,value="/getFire/{id}")
    public String getFire(@PathVariable String id) {
    	String fire = new String();
        fire=fService.getFire(id);
        return(fire);
    }
    
    @RequestMapping(method=RequestMethod.GET,value="/posFire")
    public ArrayList posFire() {
    	ArrayList firePos = new ArrayList();
    	firePos = fService.posFire();
        return(firePos);
    }
    
    
    
   
    
}