package com.doctors.controller;

import com.doctors.model.ScoreModel;
import com.doctors.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Score")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @GetMapping("/all")
    public List<ScoreModel> getAllReserveQualifications(){
        return scoreService.getAllScores();
    }
    @GetMapping("/{id}")
    public Optional<ScoreModel> getReserveQualification(@PathVariable Integer id){
        return scoreService.getScore(id);
    }
    @PostMapping("/save")
    public ScoreModel saveReserveQualification(@RequestBody ScoreModel scoreModel) {
        return scoreService.saveScore(scoreModel);
    }
    @DeleteMapping("/delete/{id}")
    public boolean deleteReserveQualification(@PathVariable Integer id){
        scoreService.deleteScore(id);
        return true;
    }
    @PutMapping("/update")
    public ScoreModel updateReserveQualification(@RequestBody ScoreModel scoreModel){
        return  scoreService.updateScore(scoreModel);
    }
}
